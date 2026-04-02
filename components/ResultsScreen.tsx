import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Question } from "@/data/questions"
import { cn } from "@/lib/utils"

interface ResultsScreenProps {
  questions: Question[]
  answers: (number | null)[]
  onRetry: () => void
}

const scoreColorClass: Record<number, string> = {
  0: "text-red-700",
  1: "text-red-600",
  2: "text-red-500",
  3: "text-orange-500",
  4: "text-amber-500",
  5: "text-yellow-500",
  6: "text-lime-500",
  7: "text-green-400",
  8: "text-green-600",
  9: "text-green-700",
  10: "text-emerald-600",
}

export default function ResultsScreen({ questions, answers, onRetry }: ResultsScreenProps) {
  const score = questions.reduce((acc, question, i) => {
    const chosen = answers[i]
    const correct = question.options.find((o) => o.isCorrect)
    return chosen === correct?.value ? acc + 1 : acc
  }, 0)

  const approved = score >= 8

  return (
    <div className="flex flex-1 justify-center px-4 py-8">
      <div className="w-full max-w-xl space-y-6">
        {/* Score card */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className={cn("text-6xl font-bold", scoreColorClass[score])}>
              {score} / {questions.length}
            </CardTitle>
            <div className="mt-2">
              <Badge
                variant={approved ? "default" : "destructive"}
                className="text-sm px-4 py-1"
              >
                {approved ? "✓ APROBADO" : "✗ DESAPROBADO"}
              </Badge>
            </div>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={onRetry}>
              Volver a intentar
            </Button>
          </CardFooter>
        </Card>

        {/* Question review */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Revisión de preguntas
          </p>
          {questions.map((question, i) => {
            const chosen = answers[i]
            const correctOption = question.options.find((o) => o.isCorrect)
            const chosenOption = question.options.find((o) => o.value === chosen)
            const isCorrect = chosen === correctOption?.value

            return (
              <Card
                key={question.id}
                className={cn(
                  "border-l-4",
                  isCorrect ? "border-l-green-500" : "border-l-red-500"
                )}
              >
                <CardContent className="pt-4 space-y-2">
                  <p className="text-sm font-medium">
                    <span className={cn("mr-1", isCorrect ? "text-green-600" : "text-red-500")}>
                      {isCorrect ? "✓" : "✗"}
                    </span>
                    {i + 1}. {question.question}
                  </p>

                  {question.image && (
                    <div className="relative w-full h-32 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={question.image}
                        alt="Imagen de la pregunta"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="text-sm space-y-1">
                    <p className={cn(isCorrect ? "text-green-600" : "text-red-500")}>
                      Tu respuesta: {chosenOption?.label ?? "Sin respuesta"}
                      {isCorrect && " ✓"}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-600">
                        Respuesta correcta: {correctOption?.label}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button className="w-full" onClick={onRetry}>
          Volver a intentar
        </Button>
      </div>
    </div>
  )
}
