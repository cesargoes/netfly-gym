export interface Exercise {
  id: string
  name: string
  targetMuscles: string[]
  instructions: string[]
  sets: number
  reps: string
  restTime: string
  difficulty: 'iniciante' | 'intermediário' | 'avançado'
  equipment: string[]
  gifUrl: string
  tips: string[]
  gender?: 'male' | 'female' | 'both'
}

export interface WorkoutPlan {
  id: string
  name: string
  description: string
  targetGoal: string
  duration: string
  frequency: string
  gender: 'male' | 'female' | 'both'
  difficulty: 'iniciante' | 'intermediário' | 'avançado'
  schedule: {
    [key: string]: {
      name: string
      exercises: string[]
      focusArea: string
      duration: string
    }
  }
}

// Exercícios com aparelhos de academia para perda de peso
export const exercises: Exercise[] = [
  // EXERCÍCIOS PARA PEITO
  {
    id: 'bench_press',
    name: 'Supino Reto',
    targetMuscles: ['Peitoral', 'Tríceps', 'Ombros'],
    instructions: [
      'Deite no banco com os pés firmes no chão',
      'Segure a barra um pouco mais larga que os ombros',
      'Desça a barra até tocar o peito',
      'Empurre a barra de volta à posição inicial',
      'Mantenha as escápulas retraídas'
    ],
    sets: 3,
    reps: '8-12',
    restTime: '60-90 seg',
    difficulty: 'intermediário',
    equipment: ['Banco', 'Barra', 'Anilhas'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0025.gif',
    tips: [
      'Não arqueie excessivamente as costas',
      'Mantenha os pés firmes no chão',
      'Controle a descida da barra'
    ],
    gender: 'both'
  },
  {
    id: 'incline_dumbbell_press',
    name: 'Supino Inclinado com Halteres',
    targetMuscles: ['Peitoral Superior', 'Ombros', 'Tríceps'],
    instructions: [
      'Ajuste o banco em 30-45 graus',
      'Segure os halteres com pegada pronada',
      'Desça os halteres até a linha do peito',
      'Empurre os halteres para cima',
      'Mantenha o core contraído'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '60 seg',
    difficulty: 'iniciante',
    equipment: ['Banco Inclinado', 'Halteres'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0349.gif',
    tips: [
      'Não desça os halteres muito baixo',
      'Mantenha os cotovelos levemente para dentro',
      'Foque na contração do peitoral'
    ],
    gender: 'both'
  },
  {
    id: 'pec_deck',
    name: 'Voador (Pec Deck)',
    targetMuscles: ['Peitoral'],
    instructions: [
      'Ajuste o assento para a altura correta',
      'Apoie as costas no encosto',
      'Segure as alças ou apoie os braços',
      'Traga os braços para frente contraindo o peitoral',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Máquina Voador'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0844.gif',
    tips: [
      'Não force demais a amplitude',
      'Mantenha os ombros para trás',
      'Foque na contração no meio do movimento'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA COSTAS
  {
    id: 'lat_pulldown',
    name: 'Puxada na Polia Alta',
    targetMuscles: ['Latíssimo', 'Bíceps', 'Romboides'],
    instructions: [
      'Sente-se no aparelho e ajuste a almofada das coxas',
      'Segure a barra com pegada ampla',
      'Puxe a barra em direção ao peito',
      'Contraia as escápulas',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60-90 seg',
    difficulty: 'iniciante',
    equipment: ['Polia Alta', 'Barra'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0586.gif',
    tips: [
      'Não use impulso do corpo',
      'Foque em puxar com as costas, não com os braços',
      'Mantenha o peito erguido'
    ],
    gender: 'both'
  },
  {
    id: 'seated_cable_row',
    name: 'Remada Sentado na Polia',
    targetMuscles: ['Romboides', 'Latíssimo', 'Bíceps'],
    instructions: [
      'Sente-se no banco da remada',
      'Segure o cabo com pegada neutra',
      'Puxe o cabo em direção ao abdômen',
      'Contraia as escápulas',
      'Retorne estendendo os braços'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '60 seg',
    difficulty: 'iniciante',
    equipment: ['Polia Baixa', 'Cabo', 'Banco'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0840.gif',
    tips: [
      'Mantenha as costas eretas',
      'Não balance o tronco',
      'Foque na contração das escápulas'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA PERNAS
  {
    id: 'leg_press',
    name: 'Leg Press',
    targetMuscles: ['Quadríceps', 'Glúteos'],
    instructions: [
      'Sente-se no leg press com as costas apoiadas',
      'Posicione os pés na plataforma na largura dos ombros',
      'Desça controladamente flexionando os joelhos',
      'Empurre a plataforma de volta',
      'Não trave completamente os joelhos'
    ],
    sets: 3,
    reps: '12-20',
    restTime: '90 seg',
    difficulty: 'iniciante',
    equipment: ['Leg Press'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0599.gif',
    tips: [
      'Não desça além de 90 graus nos joelhos',
      'Mantenha os joelhos alinhados com os pés',
      'Use amplitude completa controlada'
    ],
    gender: 'both'
  },
  {
    id: 'leg_extension',
    name: 'Cadeira Extensora',
    targetMuscles: ['Quadríceps'],
    instructions: [
      'Ajuste o encosto e a almofada da perna',
      'Sente-se com as costas bem apoiadas',
      'Estenda as pernas contraindo o quadríceps',
      'Pause no topo por 1 segundo',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Cadeira Extensora'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0585.gif',
    tips: [
      'Não use impulso',
      'Contraia bem o quadríceps no topo',
      'Mantenha as costas apoiadas'
    ],
    gender: 'both'
  },
  {
    id: 'leg_curl',
    name: 'Mesa Flexora',
    targetMuscles: ['Posteriores de Coxa'],
    instructions: [
      'Deite de bruços na mesa flexora',
      'Posicione a almofada atrás dos calcanhares',
      'Flexione as pernas trazendo os calcanhares em direção aos glúteos',
      'Contraia os posteriores no topo',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Mesa Flexora'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0611.gif',
    tips: [
      'Mantenha os quadris pressionados na mesa',
      'Não levante o tronco',
      'Contraia bem os posteriores'
    ],
    gender: 'both'
  },
  {
    id: 'calf_raise_machine',
    name: 'Panturrilha no Aparelho',
    targetMuscles: ['Panturrilhas'],
    instructions: [
      'Posicione-se no aparelho de panturrilha',
      'Apoie a parte anterior dos pés na plataforma',
      'Desça os calcanhares alongando as panturrilhas',
      'Suba na ponta dos pés contraindo as panturrilhas',
      'Mantenha a contração no topo'
    ],
    sets: 4,
    reps: '15-20',
    restTime: '30 seg',
    difficulty: 'iniciante',
    equipment: ['Aparelho de Panturrilha'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/1368.gif',
    tips: [
      'Use amplitude completa de movimento',
      'Pause na contração máxima',
      'Não balance o corpo'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA OMBROS
  {
    id: 'shoulder_press_machine',
    name: 'Desenvolvimento na Máquina',
    targetMuscles: ['Ombros', 'Tríceps'],
    instructions: [
      'Ajuste o assento na altura correta',
      'Segure as alças com pegada pronada',
      'Empurre as alças para cima',
      'Não trave completamente os cotovelos',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60 seg',
    difficulty: 'iniciante',
    equipment: ['Máquina de Desenvolvimento'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0733.gif',
    tips: [
      'Mantenha as costas apoiadas',
      'Não force os ombros além da amplitude natural',
      'Controle o movimento'
    ],
    gender: 'both'
  },
  {
    id: 'lateral_raise_machine',
    name: 'Elevação Lateral na Máquina',
    targetMuscles: ['Ombros Laterais'],
    instructions: [
      'Ajuste a altura do assento',
      'Apoie os braços nas almofadas',
      'Eleve os braços lateralmente',
      'Contraia os ombros no topo',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Máquina de Elevação Lateral'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0722.gif',
    tips: [
      'Não eleve além da linha dos ombros',
      'Mantenha os ombros para baixo',
      'Movimento controlado'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA BRAÇOS
  {
    id: 'cable_bicep_curl',
    name: 'Rosca Direta na Polia',
    targetMuscles: ['Bíceps'],
    instructions: [
      'Fique de pé em frente à polia baixa',
      'Segure a barra com pegada supinada',
      'Flexione os braços contraindo os bíceps',
      'Mantenha os cotovelos fixos',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Polia Baixa', 'Barra'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0207.gif',
    tips: [
      'Não balance o corpo',
      'Mantenha os cotovelos junto ao corpo',
      'Contraia bem os bíceps no topo'
    ],
    gender: 'both'
  },
  {
    id: 'tricep_pushdown',
    name: 'Tríceps na Polia Alta',
    targetMuscles: ['Tríceps'],
    instructions: [
      'Fique de pé em frente à polia alta',
      'Segure a corda ou barra',
      'Empurre para baixo estendendo os braços',
      'Mantenha os cotovelos fixos',
      'Contraia os tríceps na extensão completa'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Polia Alta', 'Corda ou Barra'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/1254.gif',
    tips: [
      'Mantenha os cotovelos junto ao corpo',
      'Não use o peso do corpo',
      'Estenda completamente os braços'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS ESPECÍFICOS PARA MULHERES (foco glúteos)
  {
    id: 'hip_thrust_machine',
    name: 'Elevação de Quadril na Máquina',
    targetMuscles: ['Glúteos', 'Posteriores'],
    instructions: [
      'Posicione-se na máquina de glúteos',
      'Apoie as costas no banco',
      'Empurre com os calcanhares elevando o quadril',
      'Contraia fortemente os glúteos no topo',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '60 seg',
    difficulty: 'iniciante',
    equipment: ['Máquina de Glúteos'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/0416.gif',
    tips: [
      'Foque na contração dos glúteos',
      'Não arqueie as costas excessivamente',
      'Mantenha os joelhos alinhados'
    ],
    gender: 'female'
  },
  {
    id: 'abductor_machine',
    name: 'Abdução na Máquina',
    targetMuscles: ['Glúteo Médio', 'Abdutores'],
    instructions: [
      'Sente-se na máquina abdutora',
      'Ajuste as almofadas nas pernas',
      'Abra as pernas contra a resistência',
      'Contraia os glúteos laterais',
      'Retorne controladamente'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '45 seg',
    difficulty: 'iniciante',
    equipment: ['Máquina Abdutora'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/1300.gif',
    tips: [
      'Movimento controlado',
      'Foque nos glúteos laterais',
      'Mantenha as costas eretas'
    ],
    gender: 'female'
  },

  // EXERCÍCIOS COMPLEMENTARES DE CARDIO
  {
    id: 'treadmill_hiit',
    name: 'Esteira HIIT',
    targetMuscles: ['Cardio', 'Pernas'],
    instructions: [
      'Aqueça 5 minutos em ritmo moderado',
      'Alterne 1 min intenso com 2 min moderado',
      'Repita por 15-20 minutos',
      'Termine com 5 min de resfriamento',
      'Mantenha postura ereta'
    ],
    sets: 1,
    reps: '15-20 min',
    restTime: '24h',
    difficulty: 'intermediário',
    equipment: ['Esteira'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/2087.gif',
    tips: [
      'Não segure nas laterais da esteira',
      'Respire de forma constante',
      'Ajuste a inclinação gradualmente'
    ],
    gender: 'both'
  },
  {
    id: 'elliptical',
    name: 'Elíptico',
    targetMuscles: ['Cardio', 'Corpo inteiro'],
    instructions: [
      'Ajuste a resistência conforme seu nível',
      'Mantenha postura ereta',
      'Use os braços ativamente',
      'Mantenha ritmo constante',
      'Varie a resistência durante o treino'
    ],
    sets: 1,
    reps: '20-30 min',
    restTime: '24h',
    difficulty: 'iniciante',
    equipment: ['Elíptico'],
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/2331.gif',
    tips: [
      'Não se apoie excessivamente nas alças',
      'Varie entre movimento para frente e para trás',
      'Mantenha frequência cardíaca na zona alvo'
    ],
    gender: 'both'
  }
]

// Planos de treino atualizados com aparelhos de academia
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'ab_split_male',
    name: 'Divisão AB - Homens',
    description: 'Treino com aparelhos de academia focado em perda de peso e ganho de força',
    targetGoal: 'Perda de peso e definição muscular',
    duration: '4-6 semanas',
    frequency: '4x por semana (AB-AB)',
    gender: 'male',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Peito, Ombros e Tríceps',
        exercises: ['bench_press', 'incline_dumbbell_press', 'pec_deck', 'shoulder_press_machine', 'tricep_pushdown'],
        focusArea: 'Peito, Ombros e Tríceps',
        duration: '45-60 min'
      },
      'terca': {
        name: 'Treino B - Pernas e Cardio',
        exercises: ['leg_press', 'leg_extension', 'leg_curl', 'calf_raise_machine', 'treadmill_hiit'],
        focusArea: 'Pernas e Condicionamento',
        duration: '45-60 min'
      },
      'quinta': {
        name: 'Treino A - Costas e Bíceps',
        exercises: ['lat_pulldown', 'seated_cable_row', 'cable_bicep_curl', 'shoulder_press_machine', 'tricep_pushdown'],
        focusArea: 'Costas, Bíceps e Ombros',
        duration: '45-60 min'
      },
      'sexta': {
        name: 'Treino B - Pernas e Glúteos',
        exercises: ['leg_press', 'leg_extension', 'leg_curl', 'calf_raise_machine', 'elliptical'],
        focusArea: 'Pernas, Glúteos e Cardio',
        duration: '45-60 min'
      }
    }
  },
  {
    id: 'ab_split_female',
    name: 'Divisão AB - Mulheres',
    description: 'Treino com aparelhos focado em tonificação e perda de peso',
    targetGoal: 'Perda de peso, tonificação e definição',
    duration: '4-6 semanas',
    frequency: '4x por semana (AB-AB)',
    gender: 'female',
    difficulty: 'iniciante',
    schedule: {
      'segunda': {
        name: 'Treino A - Corpo Superior',
        exercises: ['incline_dumbbell_press', 'lat_pulldown', 'seated_cable_row', 'lateral_raise_machine', 'cable_bicep_curl'],
        focusArea: 'Peito, Costas e Braços',
        duration: '40-50 min'
      },
      'terca': {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['leg_press', 'hip_thrust_machine', 'abductor_machine', 'leg_curl', 'calf_raise_machine'],
        focusArea: 'Glúteos, Pernas e Tonificação',
        duration: '40-50 min'
      },
      'quinta': {
        name: 'Treino A - Ombros e Braços',
        exercises: ['shoulder_press_machine', 'lateral_raise_machine', 'tricep_pushdown', 'cable_bicep_curl', 'elliptical'],
        focusArea: 'Ombros, Braços e Cardio',
        duration: '40-50 min'
      },
      'sexta': {
        name: 'Treino B - Glúteos e Cardio',
        exercises: ['leg_press', 'hip_thrust_machine', 'abductor_machine', 'leg_extension', 'treadmill_hiit'],
        focusArea: 'Glúteos, Pernas e Queima de Gordura',
        duration: '40-50 min'
      }
    }
  }
] 