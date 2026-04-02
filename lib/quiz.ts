import { Question } from "@/data/questions"

export function pickRandom(questions: Question[], n: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}
