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

// Exercícios baseados na pesquisa sobre treinos eficazes para perda de peso
export const exercises: Exercise[] = [
  // EXERCÍCIOS COMPOSTOS PARA PERDA DE PESO
  {
    id: 'burpees',
    name: 'Burpees',
    targetMuscles: ['Corpo inteiro', 'Cardio'],
    instructions: [
      'Fique em pé com os pés afastados na largura dos ombros',
      'Agache e apoie as mãos no chão',
      'Salte com os pés para trás em posição de prancha',
      'Faça uma flexão (opcional para iniciantes)',
      'Salte com os pés de volta para perto das mãos',
      'Salte para cima com os braços estendidos'
    ],
    sets: 3,
    reps: '8-15',
    restTime: '45-60 seg',
    difficulty: 'intermediário',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif',
    tips: [
      'Mantenha o core sempre contraído',
      'Se for iniciante, retire o salto final',
      'Mantenha a respiração constante'
    ],
    gender: 'both'
  },
  {
    id: 'squat_jump',
    name: 'Agachamento com Salto',
    targetMuscles: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instructions: [
      'Fique em pé com os pés afastados na largura dos ombros',
      'Agache descendo o quadril para trás',
      'Exploda para cima com um salto',
      'Aterrisse suavemente e repita o movimento'
    ],
    sets: 3,
    reps: '12-20',
    restTime: '30-45 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/l0HlPystfePnAI3G8/giphy.gif',
    tips: [
      'Aterrisse com os joelhos levemente flexionados',
      'Mantenha o peito erguido',
      'Use os braços para dar impulso'
    ],
    gender: 'both'
  },
  {
    id: 'mountain_climbers',
    name: 'Escalador',
    targetMuscles: ['Core', 'Ombros', 'Cardio'],
    instructions: [
      'Inicie em posição de prancha',
      'Traga um joelho em direção ao peito',
      'Alterne rapidamente as pernas',
      'Mantenha o core contraído o tempo todo'
    ],
    sets: 3,
    reps: '20-30 (cada perna)',
    restTime: '30-45 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/3CZ2iGe1ByKfhZxaD7/giphy.gif',
    tips: [
      'Mantenha os quadris estáveis',
      'Não deixe o quadril subir muito',
      'Movimento controlado, mesmo que rápido'
    ],
    gender: 'both'
  },
  {
    id: 'pushup',
    name: 'Flexão de Braços',
    targetMuscles: ['Peitoral', 'Tríceps', 'Ombros', 'Core'],
    instructions: [
      'Posição de prancha com mãos um pouco mais largas que os ombros',
      'Desça o corpo mantendo-o alinhado',
      'Empurre de volta à posição inicial',
      'Mantenha o core contraído'
    ],
    sets: 3,
    reps: '8-15',
    restTime: '45-60 seg',
    difficulty: 'intermediário',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/SVcsGOgpUP3NniEHBN/giphy.gif',
    tips: [
      'Para iniciantes: apoie os joelhos no chão',
      'Mantenha o corpo reto como uma prancha',
      'Desça até o peito quase tocar o chão'
    ],
    gender: 'both'
  },
  {
    id: 'jumping_jacks',
    name: 'Polichinelos',
    targetMuscles: ['Corpo inteiro', 'Cardio'],
    instructions: [
      'Fique em pé com pés juntos e braços ao lado do corpo',
      'Salte abrindo as pernas e levantando os braços',
      'Salte de volta à posição inicial',
      'Mantenha o ritmo constante'
    ],
    sets: 3,
    reps: '30-60 seg',
    restTime: '30-45 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/l41lO8vRXzSB0CkqQ/giphy.gif',
    tips: [
      'Aterrisse suavemente',
      'Mantenha os joelhos levemente flexionados',
      'Braços devem subir completamente'
    ],
    gender: 'both'
  },
  
  // EXERCÍCIOS FOCADOS EM FORÇA E RESISTÊNCIA
  {
    id: 'plank',
    name: 'Prancha',
    targetMuscles: ['Core', 'Ombros', 'Glúteos'],
    instructions: [
      'Apoie-se nos antebraços e pés',
      'Mantenha o corpo reto como uma prancha',
      'Contraia o core e respire normalmente',
      'Segure a posição pelo tempo determinado'
    ],
    sets: 3,
    reps: '30-60 seg',
    restTime: '45-60 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif',
    tips: [
      'Não deixe o quadril cair ou subir muito',
      'Mantenha a respiração constante',
      'Olhe para o chão para manter o pescoço neutro'
    ],
    gender: 'both'
  },
  {
    id: 'lunges',
    name: 'Afundo',
    targetMuscles: ['Quadríceps', 'Glúteos', 'Core'],
    instructions: [
      'Dê um passo largo para frente',
      'Desça flexionando ambos os joelhos',
      'O joelho da frente não deve passar da ponta do pé',
      'Volte à posição inicial e alterne as pernas'
    ],
    sets: 3,
    reps: '10-15 (cada perna)',
    restTime: '45-60 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/1qfDU4MJv9xoGtEKT8/giphy.gif',
    tips: [
      'Mantenha o tronco ereto',
      'Distribua o peso igualmente entre as duas pernas',
      'Desça até formar ângulos de 90° nos joelhos'
    ],
    gender: 'both'
  },
  
  // EXERCÍCIOS ESPECÍFICOS PARA MULHERES (foco em glúteos e pernas)
  {
    id: 'glute_bridge',
    name: 'Ponte para Glúteos',
    targetMuscles: ['Glúteos', 'Posteriores de coxa'],
    instructions: [
      'Deite-se de costas com joelhos flexionados',
      'Levante o quadril contraindo os glúteos',
      'Forme uma linha reta dos joelhos aos ombros',
      'Desça controladamente e repita'
    ],
    sets: 3,
    reps: '15-25',
    restTime: '30-45 seg',
    difficulty: 'iniciante',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/3o7TKqm1mNujcBPSpy/giphy.gif',
    tips: [
      'Contraia bem os glúteos no topo',
      'Não arqueie as costas excessivamente',
      'Mantenha os pés bem apoiados'
    ],
    gender: 'female'
  },
  {
    id: 'wall_sit',
    name: 'Agachamento na Parede',
    targetMuscles: ['Quadríceps', 'Glúteos'],
    instructions: [
      'Encoste as costas na parede',
      'Desça até formar ângulo de 90° nos joelhos',
      'Mantenha a posição pelo tempo determinado',
      'Mantenha os pés afastados na largura dos ombros'
    ],
    sets: 3,
    reps: '30-60 seg',
    restTime: '45-60 seg',
    difficulty: 'intermediário',
    equipment: ['Parede'],
    gifUrl: 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif',
    tips: [
      'Mantenha as costas sempre em contato com a parede',
      'Distribua o peso igualmente nos dois pés',
      'Respire normalmente durante o exercício'
    ],
    gender: 'both'
  },
  
  // EXERCÍCIOS FOCADOS EM FORÇA PARA HOMENS
  {
    id: 'pike_pushup',
    name: 'Flexão Pike (Ombros)',
    targetMuscles: ['Ombros', 'Tríceps', 'Core'],
    instructions: [
      'Inicie em posição de prancha',
      'Levante o quadril formando um "V" invertido',
      'Desça a cabeça em direção ao chão',
      'Empurre de volta à posição pike'
    ],
    sets: 3,
    reps: '6-12',
    restTime: '60-90 seg',
    difficulty: 'avançado',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/l0ExayQDzrI2xOb8A/giphy.gif',
    tips: [
      'Mantenha as pernas relativamente retas',
      'Foque em usar os ombros para empurrar',
      'Movimento controlado'
    ],
    gender: 'male'
  },
  {
    id: 'diamond_pushup',
    name: 'Flexão Diamante',
    targetMuscles: ['Tríceps', 'Peitoral'],
    instructions: [
      'Posição de flexão com mãos formando diamante',
      'Polegares e indicadores se tocando',
      'Desça mantendo os cotovelos próximos ao corpo',
      'Empurre de volta à posição inicial'
    ],
    sets: 3,
    reps: '5-12',
    restTime: '60-90 seg',
    difficulty: 'avançado',
    equipment: ['Peso corporal'],
    gifUrl: 'https://media.giphy.com/media/l0MYxei0lC8IUrleU/giphy.gif',
    tips: [
      'Mantenha os cotovelos próximos ao corpo',
      'Movimento mais lento que flexão normal',
      'Para iniciantes: apoie os joelhos'
    ],
    gender: 'male'
  }
]

// Planos de treino baseados em divisões eficazes para perda de peso
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'ab_split_male',
    name: 'Divisão AB - Homens',
    description: 'Treino dividido em dois dias focado em perda de peso e ganho de força',
    targetGoal: 'Perda de peso e definição muscular',
    duration: '4-6 semanas',
    frequency: '4x por semana (AB-AB)',
    gender: 'male',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Força e Cardio',
        exercises: ['burpees', 'pushup', 'mountain_climbers', 'plank', 'pike_pushup'],
        focusArea: 'Peito, Ombros, Core e Cardio',
        duration: '35-45 min'
      },
      'terca': {
        name: 'Treino B - Pernas e Glúteos',
        exercises: ['squat_jump', 'lunges', 'wall_sit', 'jumping_jacks', 'glute_bridge'],
        focusArea: 'Pernas, Glúteos e Cardio',
        duration: '35-45 min'
      },
      'quinta': {
        name: 'Treino A - Força e Cardio',
        exercises: ['burpees', 'diamond_pushup', 'mountain_climbers', 'plank', 'pike_pushup'],
        focusArea: 'Peito, Ombros, Core e Cardio',
        duration: '35-45 min'
      },
      'sexta': {
        name: 'Treino B - Pernas e Glúteos',
        exercises: ['squat_jump', 'lunges', 'wall_sit', 'jumping_jacks', 'glute_bridge'],
        focusArea: 'Pernas, Glúteos e Cardio',
        duration: '35-45 min'
      }
    }
  },
  {
    id: 'ab_split_female',
    name: 'Divisão AB - Mulheres',
    description: 'Treino dividido em dois dias com foco em tonificação e perda de peso',
    targetGoal: 'Perda de peso, tonificação e definição',
    duration: '4-6 semanas',
    frequency: '4x por semana (AB-AB)',
    gender: 'female',
    difficulty: 'iniciante',
    schedule: {
      'segunda': {
        name: 'Treino A - Corpo Superior e Core',
        exercises: ['pushup', 'mountain_climbers', 'plank', 'burpees', 'jumping_jacks'],
        focusArea: 'Braços, Core e Cardio',
        duration: '30-40 min'
      },
      'terca': {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['squat_jump', 'lunges', 'glute_bridge', 'wall_sit', 'mountain_climbers'],
        focusArea: 'Glúteos, Pernas e Core',
        duration: '30-40 min'
      },
      'quinta': {
        name: 'Treino A - Corpo Superior e Core',
        exercises: ['pushup', 'mountain_climbers', 'plank', 'burpees', 'jumping_jacks'],
        focusArea: 'Braços, Core e Cardio',
        duration: '30-40 min'
      },
      'sexta': {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['squat_jump', 'lunges', 'glute_bridge', 'wall_sit', 'mountain_climbers'],
        focusArea: 'Glúteos, Pernas e Core',
        duration: '30-40 min'
      }
    }
  },
  {
    id: 'abc_split_advanced',
    name: 'Divisão ABC - Avançado',
    description: 'Treino de três dias para pessoas com mais experiência',
    targetGoal: 'Perda de peso acelerada e condicionamento',
    duration: '6-8 semanas',
    frequency: '6x por semana (ABC-ABC)',
    gender: 'both',
    difficulty: 'avançado',
    schedule: {
      'segunda': {
        name: 'Treino A - HIIT e Core',
        exercises: ['burpees', 'mountain_climbers', 'jumping_jacks', 'plank'],
        focusArea: 'Cardio intenso e Core',
        duration: '25-35 min'
      },
      'terca': {
        name: 'Treino B - Força Superior',
        exercises: ['pushup', 'pike_pushup', 'diamond_pushup', 'plank'],
        focusArea: 'Peito, Ombros, Tríceps',
        duration: '30-40 min'
      },
      'quarta': {
        name: 'Treino C - Pernas e Glúteos',
        exercises: ['squat_jump', 'lunges', 'glute_bridge', 'wall_sit'],
        focusArea: 'Pernas e Glúteos',
        duration: '30-40 min'
      },
      'quinta': {
        name: 'Treino A - HIIT e Core',
        exercises: ['burpees', 'mountain_climbers', 'jumping_jacks', 'plank'],
        focusArea: 'Cardio intenso e Core',
        duration: '25-35 min'
      },
      'sexta': {
        name: 'Treino B - Força Superior',
        exercises: ['pushup', 'pike_pushup', 'diamond_pushup', 'plank'],
        focusArea: 'Peito, Ombros, Tríceps',
        duration: '30-40 min'
      },
      'sabado': {
        name: 'Treino C - Pernas e Glúteos',
        exercises: ['squat_jump', 'lunges', 'glute_bridge', 'wall_sit'],
        focusArea: 'Pernas e Glúteos',
        duration: '30-40 min'
      }
    }
  }
] 