"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Question, questions, tags } from "./quizz.types";
import { Button } from "@/lib/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Angry, Smile } from "lucide-react";
import { Badge } from "@/lib/components/ui/badge";

const shuffleAnswers = (answers: string[], correctIndex: number): [string[], number] => {
  const shuffled = [...answers];
  const correctAnswer = shuffled[correctIndex];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  const newCorrectIndex = shuffled.indexOf(correctAnswer);
  return [shuffled, newCorrectIndex];
};

const Page = (): ReactElement => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [passedQuestions, setPassedQuestions] = useState<string[]>([]);

  const [score, setScore] = useState(0);

  const [answered, setAnswered] = useState<"CORRECT" | "INCORRECT" | false>(false);

  useEffect(() => {
    questions.sort(() => Math.random() - 0.5);
    const firstQuestion = questions[0];
    const [shuffledAnswers, newCorrectIndex] = shuffleAnswers(firstQuestion.answers["fr"], firstQuestion.correct);
    setCurrentQuestion({
      ...firstQuestion,
      answers: { ...firstQuestion.answers, fr: shuffledAnswers },
      correct: newCorrectIndex
    });
  }, []);

  const clickAnswer = (index: number) => {
    if (answered) return;
    if (!currentQuestion) return;

    if (index === currentQuestion?.correct) {
      setScore(score + 1);
      setAnswered("CORRECT");
    } else {
      setAnswered("INCORRECT");
    }

    setPassedQuestions([...passedQuestions, currentQuestion?.id]);
  }

  const nextQuestion = () => {
    const nextQuestion = questions.find((question) => !passedQuestions.includes(question.id));
    if (nextQuestion) {
      const [shuffledAnswers, newCorrectIndex] = shuffleAnswers(nextQuestion.answers["fr"], nextQuestion.correct);
      setCurrentQuestion({
        ...nextQuestion,
        answers: { ...nextQuestion.answers, fr: shuffledAnswers },
        correct: newCorrectIndex
      });
    } else {
      setCurrentQuestion(null);
    }
    setAnswered(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardDescription className="-mb-4">
            {currentQuestion && (
              <>
                {currentQuestion.tags.map((tag, index) => {
                  const ctag = tags.find((t) => t.enum === tag);
                  if (!ctag) return null;

                  return (
                    <Badge key={index}>
                      {/* @ts-ignore */}
                      {cloneElement(ctag?.icon, { className: "h-4 w-4 mr-2" })}
                      {ctag.names["fr"]}
                    </Badge>
                  )
                })}
              </>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">{currentQuestion?.question["fr"]}</h2>
          <div className="space-y-2">
            {currentQuestion?.answers["fr"].map((answer, index) => (
              <Button
                key={index}
                className="w-full"
                onClick={() => clickAnswer(index)}
                variant={answered ? (index === currentQuestion?.correct ? "quizzCorrect" : "quizzIncorrect") : "default"}
              >{answer}</Button>
            ))}
          </div>

          <div className="my-4" />

          {answered && (
            <Alert>
              {answered === "CORRECT" ? <Smile className="h-4 w-4" /> : <Angry className="h-4 w-4" />}
              <AlertTitle>{answered === "CORRECT" ? "Headshot!" : "Missed!"}</AlertTitle>
              <AlertDescription>
                {currentQuestion?.explanation["fr"]}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter>
          {answered && <Button onClick={nextQuestion} className="w-full">Next question</Button>}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;