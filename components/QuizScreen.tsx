'use client'

import Image from "next/image"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Question } from "@/data/questions"
import { cn } from "@/lib/utils"

interface QuizScreenProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onConfirm: (selectedValue: number) => void
}

export default function QuizScreen({
  question,
  questionNumber,
  totalQuestions,
  onConfirm,
}: QuizScreenProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const shuffledOptions = useMemo(
    () => [...question.options].sort(() => Math.random() - 0.5),
    [question.id]
  )

  function handleConfirm() {
    if (selected === null) return
    onConfirm(selected)
    setSelected(null)
  }

  const progress = ((questionNumber - 1) / totalQuestions) * 100

  return (
    <div className="flex flex-1 items-start justify-center px-4 py-8">
      <Card className="w-full max-w-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Pregunta {questionNumber} de {totalQuestions}</span>
            <span>{questionNumber - 1}/{totalQuestions} respondidas</span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="font-medium text-base leading-relaxed">{question.question}</p>

          {question.image && (
            <div className="relative w-full h-44 rounded-md overflow-hidden bg-muted">
              <Image
                src={question.image}
                alt="Imagen de la pregunta"
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="space-y-2">
            {shuffledOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelected(option.value)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors",
                  selected === option.value
                    ? "border-primary bg-primary/10 font-medium"
                    : "border-border hover:bg-muted"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            onClick={handleConfirm}
            disabled={selected === null}
          >
            {questionNumber === totalQuestions ? "Ver Resultados" : "Confirmar y continuar →"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
