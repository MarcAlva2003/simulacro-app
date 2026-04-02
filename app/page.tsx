'use client'

import { useState } from "react"
import { questions } from "@/data/questions"
import { pickRandom } from "@/lib/quiz"
import StartScreen from "@/components/StartScreen"
import QuizScreen from "@/components/QuizScreen"
import ResultsScreen from "@/components/ResultsScreen"

type Step = "start" | "quiz" | "results"

const TOTAL_QUESTIONS = 10

export default function Home() {
  const [step, setStep] = useState<Step>("start")
  const [quizQuestions, setQuizQuestions] = useState(() => pickRandom(questions, TOTAL_QUESTIONS))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_QUESTIONS).fill(null))

  function handleStart() {
    const picked = pickRandom(questions, TOTAL_QUESTIONS)
    setQuizQuestions(picked)
    setAnswers(Array(TOTAL_QUESTIONS).fill(null))
    setCurrentIndex(0)
    setStep("quiz")
  }

  function handleConfirm(selectedValue: number) {
    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedValue
    setAnswers(newAnswers)

    if (currentIndex + 1 >= TOTAL_QUESTIONS) {
      setStep("results")
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handleRetry() {
    setStep("start")
  }

  if (step === "start") {
    return <StartScreen onStart={handleStart} />
  }

  if (step === "quiz") {
    return (
      <QuizScreen
        question={quizQuestions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={TOTAL_QUESTIONS}
        onConfirm={handleConfirm}
      />
    )
  }

  return (
    <ResultsScreen
      questions={quizQuestions}
      answers={answers}
      onRetry={handleRetry}
    />
  )
}
