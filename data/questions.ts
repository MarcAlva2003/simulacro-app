export interface Option {
  label: string
  value: number
  isCorrect: boolean
}

export interface Question {
  id: number
  question: string
  image?: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué debe realizar el conductor ante esta señal?",
    image: '/images/pare.png',
    options: [
      { label: "Disminuir la velocidad, mirar y continuar su marcha", value: 1, isCorrect: false },
      { label: "Avanzar si el vehículo viene por la izquierda", value: 2, isCorrect: false },
      { label: "Continuar con la marcha en caso de que no haya peatones", value: 3, isCorrect: false },
      { label: "Frenar totalmente el vehículo y cerciorarse de que no circule nadie, luego continuar", value: 4, isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "¿En qué lugares está prohibido adelantarse a otros vehículos?",
    options: [
      {label: "En curvas y cimas de cuestas", value: 1, isCorrect: true},
      {label: "En rectas", value: 2, isCorrect: false},
      {label: "Cuando hay líneas continuas", value: 3, isCorrect: false},
      {label: "En zona de escuelas", value: 4, isCorrect: false},
    ]
  },
  {
    id: 3,
    question: "¿Cuál es la edad mínima permitida para viajar en el asiento delantero del acompañante del auto?",
    options: [
      {label: "10 años", value: 1, isCorrect: false},
      {label: "11 años", value: 2, isCorrect: false},
      {label: "12 años", value: 3, isCorrect: true},
      {label: "13 años", value: 4, isCorrect: false},
    ]
  },
  {
    id: 4,
    question: "¿Es necesario circular con las dos manos en el volante?",
    options: [
      {label: "No, siempre que se sujete fuerte", value: 1, isCorrect: false},
      {label: "Si, excepto en el momento que se debe accionar el comando manual", value: 2, isCorrect: true},
      {label: "No, solo en el momento que se realiza un giro", value: 3, isCorrect: false},
    ]
  },
  {
    id: 5,
    question: "En una camioneta, ¿pueden transportarse personas en el sector de carga?",
    options: [
      {label: "Si", value: 1, isCorrect: false},
      {label: "No", value: 2, isCorrect: true},
      {label: "Depende de las condiciones de seguridad del ocupante", value: 3, isCorrect: false},
    ]
  },
  {
    id: 6,
    question: "¿A qué sector se deben la mayoría de los siniestros viales?",
    options: [
      {label: "Humano", value: 1, isCorrect: false},
      {label: "Vehicular", value: 2, isCorrect: true},
      {label: "Ambiental", value: 3, isCorrect: false},
    ]
  },
  {
    id: 7,
    question: "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades",
    options: [
      {label: "Verdadero", value: 1, isCorrect: false},
      {label: "Falso", value: 2, isCorrect: true},
    ]
  },
  {
    id: 8,
    question: "¿Cuál de las siguientes opciones representa a los usuatios de la vía, ordenados de más a menos vulnerables?",
    options: [
      {label: "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Auto", value: 1, isCorrect: false},
      {label: "Peatón - Ciclista - Moto - Colectivo - Taxi/Auto - Camión", value: 2, isCorrect: true},
      {label: "Peatón - Ciclista - Colectivo - Moto -  Taxi/Auto - Camión", value: 3, isCorrect: false},
    ]
  },
  {
    id: 9,
    question: "Al tener la licencia vencida, ¿por cuanto tiempo puede seguir conduciendo sin estar en infracción?",
    options: [
      {label: "30 días corridos desde su vencimiento", value: 1, isCorrect: false},
      {label: "No está permitido conducir con la licencia vencida a menos que esté prorrogada", value: 2, isCorrect: true},
      {label: "24 horas luego de su vencimiento", value: 3, isCorrect: false},
    ]
  },
  {
    id: 10,
    question: "¿Cuánto dura en su totalidad la condición de principiante?",
    options: [
      {label: "2 años solo en el caso de menores de edad", value: 1, isCorrect: false},
      {label: "6 meses, solo para personas que la tramiten por primera vez", value: 2, isCorrect: true},
      {label: "1 año, independientemente de la edad", value: 3, isCorrect: false},
    ]
  },
  {
    id: 11,
    question: "El conductor principiante en esta condición, ¿por dónde puede circular durante este determinado período?",
    options: [
      {label: "Solo por calle y autopista", value: 1, isCorrect: false},
      {label: "Solo por calles y avenidas", value: 2, isCorrect: true},
      {label: "Por calle, autopistas y rutas", value: 3, isCorrect: false},
    ]
  },
  {
    id: 12,
    question: "Según la ley 24.449, ¿qué indica el cordón pintado de rojo?",
    options: [
      {label: "Prohibido estacionar, puede detenerse", value: 1, isCorrect: false},
      {label: "Lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros", value: 2, isCorrect: false},
      {label: "Prohibido estacionar o detenerse", value: 3, isCorrect: true},
    ]
  },
  {
    id: 13,
    question: "¿Cuál es la ley nacional de seguridad vial?",
    options: [
      {label: "Ley N° 24.449", value: 1, isCorrect: true},
      {label: "Ley N° 13.927", value: 2, isCorrect: false},
      {label: "Ley N° 26.363", value: 3, isCorrect: false},
    ]
  },
  {
    id: 14,
    question: "En la vía pública queda terminantemente prohibido",
    options: [
      {label: "Conducir utilizando auriculares y sistemas de comunicación de operación manual contínua", value: 1, isCorrect: false},
      {label: "En curvas, encrucijadas y otras zonas peligrosas, cambiar de carril o fila, adelantarse, no respetar la velocidad precautoria y detenerse", value: 2, isCorrect: false},
      {label: "Ceder o permitir la conducción a personas sin habilitación", value: 3, isCorrect: false},
      {label: "Todas son correctas", value: 4, isCorrect: true},
    ]
  },
  {
    id: 15,
    question: "¿Cuál es la distancia de seguridad entre dos vehículos?",
    options: [
      {label: "10 segundos", value: 1, isCorrect: true},
      {label: "7 segundos", value: 2, isCorrect: false},
      {label: "2 segundos", value: 3, isCorrect: false},
    ]
  },
  {
    id: 16,
    question: "¿A qué distancia como mínimo debe estacionar en las intermediaciones de hospitales, escuelas u otros servicios públicos?",
    options: [
      {label: "10 metros", value: 1, isCorrect: true},
      {label: "20 metros", value: 2, isCorrect: false},
      {label: "30 metros", value: 3, isCorrect: false},
    ]
  },
  {
    id: 17,
    question: "Si la senda peatonal no se encuentra pintada en la intersección de calzada, ¿deben ser respetadas por los conductores?",
    options: [
      {label: "Si", value: 1, isCorrect: true},
      {label: "No", value: 2, isCorrect: false},
    ]
  },
  {
    id: 18,
    question: "¿Qué representa esta señal?",
    image: "/images/fin-prescripcion.png",
    options: [
      {label: "Fin de prescripción", value: 1, isCorrect: true},
      {label: "Fin de prevención", value: 2, isCorrect: false},
      {label: "Prohibido adelantar", value: 3, isCorrect: false},
    ]
  },
  {
    id: 19,
    question: "¿Qué representa esta señal?",
    image: "/images/ceda-paso.png",
    options: [
      {label: "Ceda el paso", value: 1, isCorrect: true},
      {label: "Prohibido avanzar", value: 2, isCorrect: false},
      {label: "Emergencia", value: 3, isCorrect: false},
    ]
  },
  {
    id: 20,
    question: "¿Qué representa esta señal?",
    image: "/images/sentido-circ-izq.png",
    options: [
      {label: "Sentido de circulación izquierda", value: 1, isCorrect: true},
      {label: "Giro obligatorio a la izquierda", value: 2, isCorrect: false},
      {label: "Calle a la izquierda", value: 3, isCorrect: false},
    ]
  },
  {
    id: 21,
    question: "¿Qué representa esta señal?",
    image: "/images/limitacion-altura.png",
    options: [
      {label: "Limitación de altura", value: 1, isCorrect: true},
      {label: "Tunel alto", value: 2, isCorrect: false},
      {label: "Limitación de largo", value: 3, isCorrect: false},
      {label: "Limitación de ancho", value: 4, isCorrect: false},
    ]
  },
  {
    id: 22,
    question: "¿Qué representa esta señal?",
    image: "/images/encrucijada-cruce.png",
    options: [
      {label: "Encrucijada Cruce", value: 1, isCorrect: true},
      {label: "Carril de emergencia", value: 2, isCorrect: false},
      {label: "Carril ceda el paso", value: 3, isCorrect: false},
    ]
  },
  {
    id: 23,
    question: "¿Qué representa esta señal?",
    image: "/images/memoria.png",
    options: [
      {label: "Estrella de San Andrés", value: 1, isCorrect: false},
      {label: "Emblema de atención y memoria de las victimas en siniestros viales", value: 2, isCorrect: true},
      {label: "Encrucijada", value: 3, isCorrect: false},
    ]
  },
  {
    id: 24,
    question: "¿Qué representa esta señal?",
    image: "/images/prohibido-circular-camiones.png",
    options: [
      {label: "Prohibido circular (camiones)", value: 1, isCorrect: true},
      {label: "Prohibido usar camiones", value: 2, isCorrect: false},
      {label: "Permitido circular (camiones)", value: 3, isCorrect: false},
    ]
  },
  {
    id: 25,
    question: "¿Qué representa esta señal?",
    image: "/images/senda-peatonal.png",
    options: [
      {label: "Senda peatonal", value: 1, isCorrect: true},
      {label: "División de calzada", value: 2, isCorrect: false},
      {label: "Calle doble mano", value: 3, isCorrect: false},
    ]
  },
  {
    id: 26,
    question: "¿Qué representa esta señal?",
    image: "/images/circulacion-alternativa.png",
    options: [
      {label: "Sentido de circulación alternativa", value: 1, isCorrect: true},
      {label: "Paso obligatorio", value: 2, isCorrect: false},
      {label: "Comienzo de doble mano", value: 3, isCorrect: false},
    ]
  },
  {
    id: 27,
    question: "¿Qué representa esta señal?",
    image: "/images/atencion.png",
    options: [
      {label: "Ceda el paso", value: 1, isCorrect: false},
      {label: "Atención", value: 2, isCorrect: true},
      {label: "Precaución", value: 3, isCorrect: false},
    ]
  },
  {
    id: 28,
    question: "¿Qué representa esta señal?",
    image: "/images/circ-exclusiva-peatones.png",
    options: [
      {label: "Prohibido peatones", value: 1, isCorrect: false},
      {label: "Niños jugando", value: 2, isCorrect: false},
      {label: "Circulación permitida (Exclusivo peatones)", value: 3, isCorrect: true},
    ]
  },
]
