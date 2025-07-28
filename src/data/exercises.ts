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
      'Empurre para cima até os braços ficarem estendidos',
      'Mantenha as escápulas retraídas'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Banco', 'Barra', 'Anilhas'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/5/57/Strength_Training_Circuit-_Forward_Lunge.webm/Strength_Training_Circuit-_Forward_Lunge.webm.360p.vp9.webm',
    tips: ['Mantenha os pés no chão', 'Não arqueie demais as costas', 'Controle a descida'],
    gender: 'both'
  },
  {
    id: 'incline_press',
    name: 'Supino Inclinado',
    targetMuscles: ['Peitoral Superior', 'Ombros', 'Tríceps'],
    instructions: [
      'Ajuste o banco para 30-45 graus',
      'Segure os halteres com pegada neutra',
      'Desça controladamente até o peito',
      'Empurre para cima em linha reta',
      'Aperte o peitoral no topo'
    ],
    sets: 3,
    reps: '8-10',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Banco Inclinado', 'Halteres'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Animation_triceps_biceps.gif',
    tips: ['Não use muito peso inicialmente', 'Foque na conexão mente-músculo'],
    gender: 'both'
  },
  {
    id: 'pec_deck',
    name: 'Voador (Pec Deck)',
    targetMuscles: ['Peitoral', 'Ombros Anteriores'],
    instructions: [
      'Sente-se na máquina com as costas apoiadas',
      'Segure as alças ou apoie os braços nos pads',
      'Mantenha os cotovelos ligeiramente flexionados',
      'Junte os braços na frente do peito',
      'Retorne controladamente à posição inicial'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Máquina Voador'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Men_and_women_on_exercise_bikes_%28Source%29.webm',
    tips: ['Foque no alongamento e contração', 'Não use impulso'],
    gender: 'both'
  },

  // EXERCÍCIOS PARA COSTAS
  {
    id: 'lat_pulldown',
    name: 'Puxada na Polia Alta',
    targetMuscles: ['Latíssimo', 'Bíceps', 'Romboides'],
    instructions: [
      'Sente-se na máquina e ajuste a almofada das pernas',
      'Segure a barra com pegada pronada, mais larga que os ombros',
      'Incline ligeiramente o tronco para trás',
      'Puxe a barra até a altura do peito alto',
      'Suba controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Máquina de Polia', 'Barra'],
    gifUrl: 'https://commons.wikimedia.org/wiki/Category:Weight_training_animations#/media/File:Dumb_Bell_10.ogv',
    tips: ['Puxe com as costas, não com os braços', 'Mantenha o peito para fora'],
    gender: 'both'
  },
  {
    id: 'seated_row',
    name: 'Remada Sentado na Polia',
    targetMuscles: ['Latíssimo', 'Romboides', 'Trapézio Médio'],
    instructions: [
      'Sente-se na máquina com os pés apoiados',
      'Segure o cabo com as duas mãos',
      'Mantenha a coluna ereta',
      'Puxe o cabo em direção ao abdômen',
      'Aperte as escápulas no final do movimento'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Máquina de Polia', 'Cabo'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🚣 Remada Sentado</text></svg>',
    tips: ['Mantenha os ombros para baixo', 'Não curve as costas'],
    gender: 'both'
  },

  // EXERCÍCIOS PARA PERNAS
  {
    id: 'leg_press',
    name: 'Leg Press',
    targetMuscles: ['Quadríceps', 'Glúteos', 'Isquiotibiais'],
    instructions: [
      'Sente-se na máquina e posicione os pés na plataforma',
      'Mantenha os pés na largura dos ombros',
      'Desça até formar 90 graus nos joelhos',
      'Empurre a plataforma com os calcanhares',
      'Não trave completamente os joelhos no topo'
    ],
    sets: 4,
    reps: '12-15',
    restTime: '90s',
    difficulty: 'iniciante',
    equipment: ['Máquina Leg Press'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23e8f4f8"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🦵 Leg Press</text></svg>',
    tips: ['Mantenha os joelhos alinhados', 'Não desça muito se sentir dor'],
    gender: 'both'
  },
  {
    id: 'leg_extension',
    name: 'Cadeira Extensora',
    targetMuscles: ['Quadríceps'],
    instructions: [
      'Sente-se na máquina e ajuste o encosto',
      'Posicione as pernas atrás do rolo',
      'Mantenha as costas apoiadas',
      'Estenda as pernas até a posição horizontal',
      'Desça controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Cadeira Extensora'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23fff2e6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🦵 Extensora</text></svg>',
    tips: ['Não balance as pernas', 'Contraia o quadríceps no topo'],
    gender: 'both'
  },
  {
    id: 'leg_curl',
    name: 'Mesa Flexora',
    targetMuscles: ['Isquiotibiais', 'Panturrilhas'],
    instructions: [
      'Deite-se de bruços na máquina',
      'Posicione as pernas sob o rolo',
      'Segure as alças laterais',
      'Flexione as pernas em direção aos glúteos',
      'Desça controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Mesa Flexora'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f0f8e6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🦵 Flexora</text></svg>',
    tips: ['Mantenha o quadril apoiado', 'Aperte os isquiotibiais no topo'],
    gender: 'both'
  },
  {
    id: 'calf_raise',
    name: 'Panturrilha no Aparelho',
    targetMuscles: ['Panturrilhas'],
    instructions: [
      'Posicione-se na máquina de panturrilha',
      'Coloque os ombros sob os pads',
      'Apoie apenas a ponta dos pés na plataforma',
      'Suba o máximo possível',
      'Desça até sentir alongamento'
    ],
    sets: 4,
    reps: '15-20',
    restTime: '30-45s',
    difficulty: 'iniciante',
    equipment: ['Máquina de Panturrilha'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f5f0ff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🦵 Panturrilha</text></svg>',
    tips: ['Faça movimento completo', 'Segure por 1 segundo no topo'],
    gender: 'both'
  },

  // EXERCÍCIOS PARA OMBROS
  {
    id: 'shoulder_press',
    name: 'Desenvolvimento na Máquina',
    targetMuscles: ['Deltoides', 'Tríceps'],
    instructions: [
      'Sente-se na máquina e ajuste a altura',
      'Segure as alças na altura dos ombros',
      'Mantenha as costas apoiadas',
      'Empurre para cima até estender os braços',
      'Desça controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Máquina de Desenvolvimento'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23ffe6f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">💪 Desenvolvimento</text></svg>',
    tips: ['Não arqueie as costas', 'Mantenha o core contraído'],
    gender: 'both'
  },
  {
    id: 'lateral_raise',
    name: 'Elevação Lateral na Máquina',
    targetMuscles: ['Deltoides Lateral'],
    instructions: [
      'Sente-se na máquina e ajuste a altura',
      'Coloque os braços nos pads laterais',
      'Mantenha os cotovelos ligeiramente flexionados',
      'Eleve os braços até a altura dos ombros',
      'Desça controladamente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Máquina de Elevação Lateral'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23e6f7ff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">💪 Elevação Lateral</text></svg>',
    tips: ['Não eleve acima dos ombros', 'Foque no deltoides lateral'],
    gender: 'both'
  },

  // EXERCÍCIOS PARA BRAÇOS
  {
    id: 'bicep_curl',
    name: 'Rosca Direta na Polia',
    targetMuscles: ['Bíceps'],
    instructions: [
      'Fique em pé de frente para a polia baixa',
      'Segure a barra com pegada supinada',
      'Mantenha os cotovelos colados ao corpo',
      'Flexione os braços até o máximo',
      'Desça controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Polia', 'Barra'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Animation_triceps_biceps.gif',
    tips: ['Não balance o corpo', 'Aperte o bíceps no topo'],
    gender: 'both'
  },
  {
    id: 'tricep_pushdown',
    name: 'Tríceps na Polia Alta',
    targetMuscles: ['Tríceps'],
    instructions: [
      'Fique em pé de frente para a polia alta',
      'Segure a barra com pegada pronada',
      'Mantenha os cotovelos fixos ao lado do corpo',
      'Empurre para baixo até estender completamente',
      'Suba controladamente'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Polia', 'Barra'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Animation_triceps_biceps.gif',
    tips: ['Mantenha os cotovelos parados', 'Aperte o tríceps embaixo'],
    gender: 'both'
  },

  // EXERCÍCIOS ESPECÍFICOS PARA MULHERES
  {
    id: 'hip_thrust',
    name: 'Elevação de Quadril na Máquina',
    targetMuscles: ['Glúteos', 'Isquiotibiais'],
    instructions: [
      'Sente-se na máquina de hip thrust',
      'Posicione a barra sobre o quadril',
      'Apoie as costas no banco',
      'Eleve o quadril contraindo os glúteos',
      'Desça controladamente'
    ],
    sets: 4,
    reps: '12-15',
    restTime: '60-90s',
    difficulty: 'intermediário',
    equipment: ['Máquina Hip Thrust', 'Barra'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23fff0f5"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🍑 Hip Thrust</text></svg>',
    tips: ['Aperte os glúteos no topo', 'Mantenha o core contraído'],
    gender: 'female'
  },
  {
    id: 'abductor',
    name: 'Abdução na Máquina',
    targetMuscles: ['Glúteo Médio', 'Glúteo Menor'],
    instructions: [
      'Sente-se na máquina abdutora',
      'Posicione as pernas nos pads laterais',
      'Mantenha as costas apoiadas',
      'Abra as pernas contra a resistência',
      'Feche controladamente'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '45-60s',
    difficulty: 'iniciante',
    equipment: ['Máquina Abdutora'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23f0fff0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🦵 Abdutora</text></svg>',
    tips: ['Movimento controlado', 'Foque nos glúteos laterais'],
    gender: 'female'
  },

  // EXERCÍCIOS DE CARDIO
  {
    id: 'treadmill_hiit',
    name: 'Esteira HIIT',
    targetMuscles: ['Cardiovascular', 'Pernas'],
    instructions: [
      'Aqueça por 5 minutos em ritmo moderado',
      'Alterne 30s intenso com 90s moderado',
      'Repita por 15-20 minutos',
      'Resfrie por 5 minutos',
      'Mantenha a postura ereta'
    ],
    sets: 1,
    reps: '20 min',
    restTime: 'Entre intervalos',
    difficulty: 'intermediário',
    equipment: ['Esteira'],
    gifUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Men_and_women_on_exercise_bikes_%28Source%29.webm',
    tips: ['Comece gradualmente', 'Hidrate-se durante o exercício'],
    gender: 'both'
  },
  {
    id: 'elliptical',
    name: 'Elíptico',
    targetMuscles: ['Cardiovascular', 'Corpo Todo'],
    instructions: [
      'Ajuste a resistência conforme seu nível',
      'Mantenha a postura ereta',
      'Use tanto braços quanto pernas',
      'Mantenha ritmo constante',
      'Varie a resistência durante o treino'
    ],
    sets: 1,
    reps: '25-30 min',
    restTime: 'N/A',
    difficulty: 'iniciante',
    equipment: ['Elíptico'],
    gifUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%23e6f3ff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23666">🏃 Elíptico</text></svg>',
    tips: ['Movimento suave', 'Ótimo para baixo impacto'],
    gender: 'both'
  }
]

// Planos de treino para perda de peso
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'ab_male',
    name: 'Divisão AB - Homens',
    description: 'Treino dividido em duas partes focado em perda de peso e ganho de massa muscular',
    targetGoal: 'Perda de peso e definição muscular',
    duration: '8-12 semanas',
    frequency: '4-5x por semana',
    gender: 'male',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Superior',
        exercises: ['bench_press', 'incline_press', 'lat_pulldown', 'seated_row', 'shoulder_press', 'bicep_curl', 'tricep_pushdown'],
        focusArea: 'Peito, Ombros, Costas e Braços',
        duration: '45-60 min'
      },
      'terca': {
        name: 'Treino B - Inferior + Cardio',
        exercises: ['leg_press', 'leg_extension', 'leg_curl', 'calf_raise', 'treadmill_hiit'],
        focusArea: 'Pernas e Cardiovascular',
        duration: '50-65 min'
      },
      'quarta': {
        name: 'Descanso Ativo',
        exercises: ['elliptical'],
        focusArea: 'Recuperação e Cardio Leve',
        duration: '20-30 min'
      },
      'quinta': {
        name: 'Treino A - Superior',
        exercises: ['pec_deck', 'incline_press', 'lat_pulldown', 'lateral_raise', 'bicep_curl', 'tricep_pushdown'],
        focusArea: 'Peito, Ombros, Costas e Braços',
        duration: '45-60 min'
      },
      'sexta': {
        name: 'Treino B - Inferior + Cardio',
        exercises: ['leg_press', 'leg_extension', 'leg_curl', 'calf_raise', 'elliptical'],
        focusArea: 'Pernas e Cardiovascular',
        duration: '50-65 min'
      },
      'sabado': {
        name: 'Cardio Opcional',
        exercises: ['treadmill_hiit'],
        focusArea: 'Cardiovascular',
        duration: '25-30 min'
      },
      'domingo': {
        name: 'Descanso Total',
        exercises: [],
        focusArea: 'Recuperação',
        duration: 'Descanso'
      }
    }
  },
  {
    id: 'ab_female',
    name: 'Divisão AB - Mulheres',
    description: 'Treino focado em tonificação e queima de gordura com ênfase em glúteos e pernas',
    targetGoal: 'Tonificação e perda de peso',
    duration: '8-12 semanas',
    frequency: '4-5x por semana',
    gender: 'female',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Superior',
        exercises: ['incline_press', 'pec_deck', 'lat_pulldown', 'seated_row', 'lateral_raise', 'bicep_curl', 'tricep_pushdown'],
        focusArea: 'Peito, Costas, Ombros e Braços',
        duration: '40-50 min'
      },
      'terca': {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['leg_press', 'hip_thrust', 'abductor', 'leg_curl', 'calf_raise', 'elliptical'],
        focusArea: 'Glúteos, Pernas e Cardio',
        duration: '55-70 min'
      },
      'quarta': {
        name: 'Cardio Moderado',
        exercises: ['elliptical'],
        focusArea: 'Cardiovascular',
        duration: '30-40 min'
      },
      'quinta': {
        name: 'Treino A - Superior',
        exercises: ['bench_press', 'pec_deck', 'lat_pulldown', 'shoulder_press', 'lateral_raise', 'bicep_curl'],
        focusArea: 'Peito, Costas e Ombros',
        duration: '40-50 min'
      },
      'sexta': {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['hip_thrust', 'leg_press', 'abductor', 'leg_extension', 'leg_curl', 'treadmill_hiit'],
        focusArea: 'Glúteos, Pernas e HIIT',
        duration: '55-70 min'
      },
      'sabado': {
        name: 'Cardio Leve',
        exercises: ['elliptical'],
        focusArea: 'Recuperação Ativa',
        duration: '25-35 min'
      },
      'domingo': {
        name: 'Descanso Total',
        exercises: [],
        focusArea: 'Recuperação',
        duration: 'Descanso'
      }
    }
  },
  {
    id: 'abc_advanced',
    name: 'Divisão ABC - Avançado',
    description: 'Treino avançado de 3 dias com maior volume e intensidade',
    targetGoal: 'Hipertrofia e perda de gordura',
    duration: '12-16 semanas',
    frequency: '6x por semana',
    gender: 'both',
    difficulty: 'avançado',
    schedule: {
      'segunda': {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['bench_press', 'incline_press', 'pec_deck', 'tricep_pushdown', 'shoulder_press'],
        focusArea: 'Peito, Tríceps e Ombros',
        duration: '60-75 min'
      },
      'terca': {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['lat_pulldown', 'seated_row', 'bicep_curl', 'lateral_raise'],
        focusArea: 'Costas, Bíceps e Ombros',
        duration: '55-70 min'
      },
      'quarta': {
        name: 'Treino C - Pernas Completo',
        exercises: ['leg_press', 'leg_extension', 'leg_curl', 'hip_thrust', 'abductor', 'calf_raise'],
        focusArea: 'Pernas Completas',
        duration: '70-85 min'
      },
      'quinta': {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['incline_press', 'bench_press', 'pec_deck', 'tricep_pushdown', 'lateral_raise'],
        focusArea: 'Peito, Tríceps e Ombros',
        duration: '60-75 min'
      },
      'sexta': {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['seated_row', 'lat_pulldown', 'bicep_curl', 'shoulder_press'],
        focusArea: 'Costas, Bíceps e Ombros',
        duration: '55-70 min'
      },
      'sabado': {
        name: 'Treino C - Pernas + Cardio',
        exercises: ['leg_press', 'hip_thrust', 'leg_extension', 'leg_curl', 'calf_raise', 'treadmill_hiit'],
        focusArea: 'Pernas e Cardiovascular',
        duration: '70-85 min'
      },
      'domingo': {
        name: 'Descanso ou Cardio Leve',
        exercises: ['elliptical'],
        focusArea: 'Recuperação Ativa',
        duration: '20-30 min'
      }
    }
  }
] 