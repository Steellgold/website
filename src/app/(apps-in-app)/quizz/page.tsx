"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Question, tags } from "./quizz.types";
import { questions } from "./quizz.data";
import { Button } from "@/lib/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Angry, Smile } from "lucide-react";
import { Badge } from "@/lib/components/ui/badge";
import { useLang } from "@/lib/stores/lang.store";
import { Buttons } from "@/lib/components/buttons";
import { cn } from "@/lib/utils";

type AvailableLangs = keyof Question["question"];

const shuffleAnswersForAllLanguages = (
  allAnswers: Record<AvailableLangs, string[]>,
  correctIndex: number
): { answers: Record<AvailableLangs, string[]>; correct: number } => {
  const referenceAnswers = allAnswers["fr"];
  const shuffledIndices = [...referenceAnswers.keys()];
  
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  const originalCorrectIndex = correctIndex;
  const newCorrectIndex = shuffledIndices.indexOf(originalCorrectIndex);

  const newAnswers: Record<AvailableLangs, string[]> = {} as any;
  for (const langKey in allAnswers) {
    const lang = langKey as AvailableLangs;
    newAnswers[lang] = shuffledIndices.map(i => allAnswers[lang][i]);
  }

  return { answers: newAnswers, correct: newCorrectIndex };
};

const Page = (): ReactElement => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [passedQuestions, setPassedQuestions] = useState<string[]>([]);
  const { lang } = useLang();

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<"CORRECT" | "INCORRECT" | false>(false);
  const [selected, setSelected] = useState<number | null>(null);

  const clickAnswer = (index: number) => {
    if (answered) return;
    if (!currentQuestion) return;

    if (index === currentQuestion.correct) {
      setScore(score + 1);
      setPassedQuestions([...passedQuestions, currentQuestion.id]);
      setAnswered("CORRECT");
    } else {
      setAnswered("INCORRECT");
    }

    setSelected(index);
  };

  const nextQuestion = () => {
    const remainingQuestions = questions.filter((question) => !passedQuestions.includes(question.id));
    if (remainingQuestions.length > 0) {
      const shuffledRemaining = [...remainingQuestions].sort(() => Math.random() - 0.5);
      const nextQuestion = shuffledRemaining[0];

      const { answers, correct } = shuffleAnswersForAllLanguages(nextQuestion.answers, nextQuestion.correct);

      setCurrentQuestion({
        ...nextQuestion,
        answers: answers,
        correct: correct
      });
    } else {
      setCurrentQuestion(null);
    }
    setAnswered(false);
  };

  if (!currentQuestion && passedQuestions.length === questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p>You finished the quizz! Your score is {score}/{questions.length}.</p>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="mt-14 md:min-h-screen flex items-center md:justify-center md:mt-0 p-4">
        <Buttons showTopButton={false} />

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Quizz</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Click the button to start the quizz!</p>
          </CardContent>
          <CardFooter>
            <Button onClick={nextQuestion} className="w-full">Start</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-14 md:min-h-screen flex items-center md:justify-center md:mt-0 p-4">
      <Buttons showTopButton={false} />

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardDescription className="-mb-4 flex flex-row justify-between">
            <div>
              {currentQuestion && (
                <>
                  {currentQuestion.tags.map((tag, index) => {
                    const ctag = tags.find((t) => t.enum === tag);
                    if (!ctag) return null;

                    return (
                      <Badge key={index}>
                        {/* @ts-ignore */}
                        {cloneElement(ctag?.icon, { className: "h-4 w-4 mr-2" })}
                        {ctag.names[lang]}
                      </Badge>
                    )
                  })}
                </>
              )}
            </div>

            <Badge>
              {score}/{questions.length}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">{currentQuestion?.question[lang]}</h2>
          <div className="flex flex-col gap-2">
            {currentQuestion?.answers[lang].map((answer, index) => (
              <Button
                key={index}
                className={cn("w-full", !answered ? "last:-mb-5" : "last:mb-0" )}
                onClick={() => clickAnswer(index)}
                variant={
                  answered ? (index === currentQuestion?.correct ?
                      "quizzCorrect" :
                      index === selected ? "quizzSelectedIncorrect" :
                      "outline"
                    ) : "default"}
              >
                {answer}
              </Button>
            ))}
          </div>

          {answered && <div className="my-4" />}

          {answered && (
            <Alert className="-mb-2">
              {answered === "CORRECT" ? <Smile className="h-4 w-4" /> : <Angry className="h-4 w-4" />}
              
              <AlertTitle>
                {answered === "CORRECT" ?
                  lang === "en" ? "Headshot!" : "Dans le mille !" :
                  lang === "en" ? "Missed!" : "Raté !"
                }
              </AlertTitle>

              <AlertDescription>
                {currentQuestion?.explanation[lang]}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter>
          {answered && (
            <Button onClick={nextQuestion} className="w-full">
              {lang === "fr" ? "Question suivante" : "Next question"}
            </Button>)}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;