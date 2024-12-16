"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Question, Tag, tags } from "./quizz.types";
import { questions } from "./quizz.data";
import { Button } from "@/lib/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Angry, Smile } from "lucide-react";
import { Badge } from "@/lib/components/ui/badge";
import { useLang } from "@/lib/stores/lang.store";
import { Buttons } from "@/lib/components/buttons";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";
import { Checkbox } from "@/lib/components/ui/checkbox";
import { Label } from "@/lib/components/ui/label";
import { confettiFireworks } from "@/lib/components/confetti";

type AvailableLangs = keyof Question["question"];

const shuffleAnswersForAllLanguages = (allAnswers: Record<AvailableLangs, string[]>): { answers: Record<AvailableLangs, string[]>; correct: number } => {
  const referenceAnswers = allAnswers["fr"];
  const shuffledIndices = [...referenceAnswers.keys()];
  
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  const newCorrectIndex = shuffledIndices.indexOf(0);

  const newAnswers: Record<AvailableLangs, string[]> = {} as any;
  for (const langKey in allAnswers) {
    const lang = langKey as AvailableLangs;
    newAnswers[lang] = shuffledIndices.map(i => allAnswers[lang][i]);
  }

  return { answers: newAnswers, correct: newCorrectIndex };
};

export const Quizz = (): ReactElement => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [passedQuestions, setPassedQuestions] = useState<string[]>([]);

  const { lang } = useLang();

  const [score, setScore] = useState(0);
  const [badScore, setBadScore] = useState(0);
  const [time, setTime] = useState(0);

  const [answered, setAnswered] = useState<"CORRECT" | "INCORRECT" | false>(false);
  const [selected, setSelected] = useState<number | null>(null);

  const [tagDialogOpen, setTagDialogOpen] = useState(false);
  const [wTags, setWTags] = useState<Tag[]>(tags);

  const [qquestions, setQQuestions] = useState<Question[]>(questions);

  useEffect(() => {
    if (currentQuestion) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestion]);

  const clickAnswer = (index: number) => {
    if (answered) return;
    if (!currentQuestion) return;

    if (index === currentQuestion.correct) {
      setScore(score + 1);
      setPassedQuestions([...passedQuestions, currentQuestion.id]);
      setAnswered("CORRECT");
    } else {
      setAnswered("INCORRECT");
      setBadScore(badScore + 1);
    }

    setSelected(index);
  };

  const nextQuestion = (restart: boolean = true) => {
    const remainingQuestions = restart ? qquestions : qquestions.filter((question) => !passedQuestions.includes(question.id));

    if (remainingQuestions.length > 0) {
      const shuffledRemaining = [...remainingQuestions].sort(() => Math.random() - 0.5);
      const nextQuestion = shuffledRemaining[0];

      const { answers, correct } = shuffleAnswersForAllLanguages(nextQuestion.answers);

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

  if (!currentQuestion && passedQuestions.length === qquestions.length) {
    confettiFireworks();

    return (
      <div className="mt-14 md:min-h-screen flex items-center md:justify-center md:mt-0 p-4">
        <Buttons showTopButton={false} />

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>
              {lang === "fr" ? "Quizz terminé !" : "Quizz finished!"}
            </CardTitle>
            <CardDescription>
              {lang === "fr" ? "Félicitations, vous avez terminé le quizz !" : "Congratulations, you have completed the quizz!"}
            </CardDescription>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              [lang === "fr" ? "Score" : "Score", score],
              [lang === "fr" ? "Mauvaises réponses" : "Bad answers", badScore],
              [lang === "fr" ? "Questions" : "Questions", qquestions.length],
              [lang === "fr" ? "Temps" : "Time", `${Math.floor(time / 60)} min ${time % 60} sec`]
            ].map(([title, value], index) => (
              <div key={index} className="flex flex-col items-center bg-primary-foreground bg-opacity-10 pt-3 pb-3 rounded-md">
                <span className="text-lg font-semibold">{value}</span>
                <span className="text-xs">{title}</span>
              </div>
            ))}
          </CardContent>

          <CardFooter>
            <Button onClick={() => {
              nextQuestion();
              setPassedQuestions([]);
              setScore(0);
              setBadScore(0);
              setQQuestions(questions);
            }} className="w-full">
              {lang === "fr" ? "Recommencer" : "Restart"}
            </Button>
          </CardFooter>
        </Card>
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
            <Button onClick={() => nextQuestion()} className="w-full">Start</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <>
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
                        <Badge
                          key={index}
                          onClick={() => setTagDialogOpen(true)}
                          className="cursor-pointer"
                        >
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
                {score}/{qquestions.length}
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

          <CardFooter className="flex flex-row justify-between">
            {answered && (
              <Button onClick={() => nextQuestion(false)} className="w-full">
                {lang === "fr" ? "Question suivante" : "Next question"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>

      <Dialog open={tagDialogOpen} onOpenChange={setTagDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {lang === "fr" ? "Sélectionner des types de questions" : "Select question types"}
            </DialogTitle>

            <DialogDescription>
              {lang === "fr"
                ? "Cliquez sur les types que vous ne voulez pas voir, ceux-ci seront exclus du quizz. Cliquez sur \"Réinitialiser\" pour réinitialiser la sélection à tout moment."
                : "Click on the types you don't want to see, they will be excluded from the quizz. Click on \"Reset\" to reset the selection at any time."}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-2 mt-2">
            {wTags.map((tag, index) => {
              return (
                <Badge className="flex items-center gap-2" key={index} variant="secondary">
                  <Checkbox id={tag.enum} checked={wTags.includes(tag)} onCheckedChange={(checked) => {
                    if (checked) {
                      setWTags([...wTags, tag]);
                    } else {
                      setWTags(wTags.filter((t) => t !== tag));
                    }
                  }} />

                  <Label htmlFor={tag.enum} className="flex items-center gap-2 cursor-pointer">
                    {tag.names[lang]}
                  </Label>
                </Badge>
              );
            })}
          </div>

          <DialogFooter className="flex justify-end mt-2">
            <Button onClick={() => setWTags(tags)} size="sm">
              {lang === "fr" ? "Réinitialiser" : "Reset"}
            </Button>

            <Button onClick={() => {
              setTagDialogOpen(false);

              setPassedQuestions([]);
              setScore(0);
              setQQuestions(questions.filter((q) => q.tags.some((t) => wTags.some((tag) => tag.enum === t))));
              
              nextQuestion();
            }} size="sm">
              {lang === "fr" ? "Sauvegarder" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}