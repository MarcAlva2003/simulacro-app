import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-10">
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <div className="text-5xl mb-2">🚗</div>
          <CardTitle className="text-2xl">¿Listo para el examen?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span>📋</span>
              <span>Se te harán <strong className="text-foreground">10 preguntas</strong> seleccionadas al azar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✅</span>
              <span>Necesitás <strong className="text-foreground">8 respuestas correctas</strong> para aprobar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🔒</span>
              <span>Una vez confirmada una respuesta, <strong className="text-foreground">no podés cambiarla</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📊</span>
              <span>Al final verás el resultado detallado con todas las preguntas.</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" onClick={onStart}>
            Comenzar Examen
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
