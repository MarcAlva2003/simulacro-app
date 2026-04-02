# Simulador de Examen - Quilmes — Design Spec

**Date:** 2026-04-02  
**Status:** Approved

---

## Overview

A mobile-first, frontend-only driving theory test simulator for Quilmes. No authentication, no backend, no persistence. All questions are hardcoded. The user takes a randomized 10-question test and sees full results at the end.

---

## Architecture

Single Client Component page (`app/page.tsx`) manages a step state machine:

```
"start" → "quiz" → "results"
```

A "Volver a intentar" button on the results screen resets all state and returns to `"start"`.

**File structure:**

```
app/
  layout.tsx           ← persistent header: "Simulador de Examen - Quilmes"
  page.tsx             ← Client Component, root state machine
  globals.css
components/
  StartScreen.tsx      ← rules card + start button
  QuizScreen.tsx       ← one question at a time, progress bar, options, confirm
  ResultsScreen.tsx    ← score with color, full question review
data/
  questions.ts         ← 30 hardcoded questions (TypeScript array)
lib/
  quiz.ts              ← picks N random questions from the bank (shuffle + slice)
public/
  signs/               ← optional question images (traffic signs, etc.)
```

---

## Data & Types

```ts
interface Option {
  label: string
  value: number
  isCorrect: boolean
}

interface Question {
  id: number
  question: string
  image?: string   // relative path to public/signs/, e.g. "signs/stop.png"
  options: Option[]
}

type Answer = number | null  // value of selected option; null only before confirming
```

Questions live in `data/questions.ts` as a typed `Question[]` array of 30 items.

`lib/quiz.ts` exports a single helper:
```ts
function pickRandom(questions: Question[], n: number): Question[]
```
Shuffles the full bank and returns the first `n` items.

---

## Quiz Flow

1. **Start screen** — shows rules, user clicks "Comenzar Examen"
2. **Quiz screen** — 10 questions shown one at a time:
   - Progress bar + counter ("Pregunta 3 de 10")
   - Question text
   - Optional image (if `question.image` is set)
   - 4 option buttons — clicking one selects it (highlighted)
   - "Confirmar y continuar" button — disabled until an option is selected; locked on confirm
   - Answers are final — no going back
3. **Results screen** — shown after question 10 is confirmed

---

## Results Screen

**Score display:**  
Large score (`8 / 10`) with a Tailwind color class based on score:

| Score | Tailwind class | Status |
|-------|----------------|--------|
| 0 | `text-red-700` | DESAPROBADO |
| 1 | `text-red-600` | DESAPROBADO |
| 2 | `text-red-500` | DESAPROBADO |
| 3 | `text-orange-500` | DESAPROBADO |
| 4 | `text-amber-500` | DESAPROBADO |
| 5 | `text-yellow-500` | DESAPROBADO |
| 6 | `text-lime-500` | DESAPROBADO |
| 7 | `text-green-400` | DESAPROBADO |
| 8 | `text-green-600` | APROBADO ✓ |
| 9 | `text-green-700` | APROBADO ✓ |
| 10 | `text-emerald-600` | APROBADO ✓ |

**Question review (all 10):**  
Each question is shown with:
- The question text (and image if present)
- User's selected answer — highlighted red if wrong, green if correct
- Correct answer — always shown in green
- A left border accent: green for correct, red for wrong

**Retry:** "Volver a intentar" button resets all state → back to Start.

---

## UI & Styling

- **Layout:** Mobile-first, centered, `max-w-xl mx-auto`, full-height page
- **Header:** `layout.tsx` — fixed/sticky top bar with "Simulador de Examen - Quilmes" logo text
- **UI library:** shadcn/ui components:
  - `Button` — start, confirm, retry actions
  - `Card` / `CardHeader` / `CardContent` / `CardFooter` — screen and review item wrappers
  - `Progress` — quiz progress bar
  - `Badge` — APROBADO / DESAPROBADO label
- **Styling:** Tailwind CSS v4 utility classes for everything else

---

## Constraints

- No authentication, no registration, no plans
- No timer
- No mid-quiz navigation (answers locked on confirm)
- No server-side code — fully static, client-only
- Feedback deferred to results screen (no per-question right/wrong during quiz)
