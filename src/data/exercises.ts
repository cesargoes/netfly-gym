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
    id: 'supino-reto',
    name: 'Supino Reto',
    targetMuscles: ['Peitoral maior', 'Tríceps', 'Deltoides anterior'],
    instructions: [
      'Deite-se no banco com os pés apoiados no chão',
      'Segure a barra com pegada ligeiramente mais larga que os ombros',
      'Desça a barra controladamente até tocar o peito',
      'Empurre a barra para cima até extensão completa dos braços'
    ],
    sets: 3,
    reps: '8-12',
    restTime: '90 segundos',
    difficulty: 'intermediário',
    equipment: ['Banco reto', 'Barra', 'Anilhas'],
    gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha os ombros retraídos durante todo movimento',
      'Não faça barra quicar no peito',
      'Respire durante a descida e expire no esforço'
    ],
    gender: 'both'
  },
  {
    id: 'supino-inclinado',
    name: 'Supino Inclinado com Halteres',
    targetMuscles: ['Peitoral superior', 'Deltoides anterior', 'Tríceps'],
    instructions: [
      'Ajuste o banco em inclinação de 30-45 graus',
      'Segure os halteres com pegada pronada',
      'Desça os halteres controladamente até alongar o peitoral',
      'Empurre os halteres para cima contraindo o peitoral'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '75 segundos',
    difficulty: 'intermediário',
    equipment: ['Banco inclinado', 'Halteres'],
    gifUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Inclinação ideal entre 30-45 graus',
      'Movimento deve ser fluido e controlado',
      'Foque na contração do peitoral superior'
    ],
    gender: 'both'
  },
  {
    id: 'voador',
    name: 'Voador (Pec Deck)',
    targetMuscles: ['Peitoral maior', 'Peitoral menor'],
    instructions: [
      'Sente-se na máquina com costas bem apoiadas',
      'Ajuste a altura para que os braços fiquem paralelos ao chão',
      'Segure as alças ou apoie os antebraços nos suportes',
      'Contraia o peito aproximando os braços à frente do corpo'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina Pec Deck'],
    gifUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha sempre tensão no músculo',
      'Evite movimentos bruscos',
      'Sinta o alongamento na posição inicial'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA COSTAS
  {
    id: 'puxada-polia-alta',
    name: 'Puxada na Polia Alta',
    targetMuscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
    instructions: [
      'Sente-se na máquina com joelhos fixos sob o apoio',
      'Segure a barra com pegada pronada, mais larga que os ombros',
      'Puxe a barra em direção ao peito, contraindo as costas',
      'Retorne controladamente à posição inicial'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '90 segundos',
    difficulty: 'intermediário',
    equipment: ['Máquina de puxada', 'Barra'],
    gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Puxe com as costas, não apenas com os braços',
      'Mantenha o peito estufado',
      'Desça a barra até a altura do peito'
    ],
    gender: 'both'
  },
  {
    id: 'remada-sentada',
    name: 'Remada Sentada na Polia',
    targetMuscles: ['Romboides', 'Trapézio médio', 'Latíssimo do dorso'],
    instructions: [
      'Sente-se com pernas ligeiramente flexionadas',
      'Segure a barra ou cabo com pegada neutra',
      'Puxe em direção ao abdômen contraindo as escápulas',
      'Retorne controladamente mantendo tensão'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '75 segundos',
    difficulty: 'intermediário',
    equipment: ['Máquina de polia', 'Cabo com pegador'],
    gifUrl: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha as costas retas durante todo movimento',
      'Foque em "juntar" as escápulas',
      'Evite balançar o tronco'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA PERNAS
  {
    id: 'leg-press',
    name: 'Leg Press',
    targetMuscles: ['Quadríceps', 'Glúteos', 'Posterior de coxa'],
    instructions: [
      'Sente-se na máquina com costas bem apoiadas',
      'Posicione os pés na plataforma na largura dos ombros',
      'Desça controladamente flexionando os joelhos a 90 graus',
      'Empurre a plataforma estendendo as pernas'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '90 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina Leg Press'],
    gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Desça até 90 graus nos joelhos',
      'Mantenha os pés paralelos',
      'Não trave completamente os joelhos na subida'
    ],
    gender: 'both'
  },
  {
    id: 'cadeira-extensora',
    name: 'Cadeira Extensora',
    targetMuscles: ['Quadríceps'],
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Posicione as pernas sob o rolo acolchoado',
      'Estenda as pernas contraindo o quadríceps',
      'Desça controladamente sem relaxar totalmente'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Cadeira extensora'],
    gifUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Movimento deve ser fluido e controlado',
      'Pause 1 segundo na contração máxima',
      'Ajuste o peso para não compensar com outros músculos'
    ],
    gender: 'both'
  },
  {
    id: 'mesa-flexora',
    name: 'Mesa Flexora',
    targetMuscles: ['Posterior de coxa', 'Isquiotibiais'],
    instructions: [
      'Deite-se de bruços na mesa flexora',
      'Posicione as pernas sob o rolo acolchoado',
      'Flexione os joelhos puxando os calcanhares em direção aos glúteos',
      'Retorne controladamente à posição inicial'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Mesa flexora'],
    gifUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha os quadris apoiados na mesa',
      'Evite arquear as costas',
      'Foque na contração dos posteriores'
    ],
    gender: 'both'
  },
  {
    id: 'panturrilha-aparelho',
    name: 'Panturrilha no Aparelho',
    targetMuscles: ['Gastrocnêmio', 'Sóleo'],
    instructions: [
      'Posicione-se no aparelho com ombros sob o apoio',
      'Coloque as pontas dos pés na plataforma',
      'Eleve o corpo contraindo as panturrilhas',
      'Desça controladamente alongando o músculo'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '45 segundos',
    difficulty: 'iniciante',
    equipment: ['Aparelho para panturrilha'],
    gifUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Amplitude completa de movimento',
      'Pause na contração máxima',
      'Desça bem para alongar o músculo'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA OMBROS
  {
    id: 'desenvolvimento-maquina',
    name: 'Desenvolvimento na Máquina',
    targetMuscles: ['Deltoides', 'Tríceps'],
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Segure as alças na altura dos ombros',
      'Empurre para cima estendendo completamente os braços',
      'Desça controladamente até a posição inicial'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '75 segundos',
    difficulty: 'intermediário',
    equipment: ['Máquina de desenvolvimento'],
    gifUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha o core contraído',
      'Não force além da amplitude natural',
      'Movimento deve ser fluido'
    ],
    gender: 'both'
  },
  {
    id: 'elevacao-lateral-maquina',
    name: 'Elevação Lateral na Máquina',
    targetMuscles: ['Deltoides médio'],
    instructions: [
      'Sente-se na máquina com braços ao lado do corpo',
      'Posicione os antebraços contra os apoios acolchoados',
      'Eleve os braços lateralmente até a altura dos ombros',
      'Desça controladamente mantendo tensão'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de elevação lateral'],
    gifUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Não eleve além da linha dos ombros',
      'Movimento lento e controlado',
      'Foque na contração do deltoides médio'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS PARA BRAÇOS
  {
    id: 'rosca-direta-polia',
    name: 'Rosca Direta na Polia',
    targetMuscles: ['Bíceps braquial', 'Braquial'],
    instructions: [
      'Fique em pé de frente para a polia baixa',
      'Segure a barra com pegada supinada na largura dos ombros',
      'Flexione os cotovelos contraindo os bíceps',
      'Desça controladamente mantendo tensão'
    ],
    sets: 3,
    reps: '10-12',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Polia baixa', 'Barra reta'],
    gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha os cotovelos fixos ao lado do corpo',
      'Movimento deve ser apenas dos antebraços',
      'Contraia bem no topo do movimento'
    ],
    gender: 'both'
  },
  {
    id: 'triceps-polia-alta',
    name: 'Tríceps na Polia Alta',
    targetMuscles: ['Tríceps braquial'],
    instructions: [
      'Fique em pé de frente para a polia alta',
      'Segure a barra com pegada pronada',
      'Mantenha cotovelos fixos e estenda os antebraços',
      'Retorne controladamente à posição inicial'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Polia alta', 'Barra ou corda'],
    gifUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Cotovelos sempre fixos ao lado do corpo',
      'Estenda completamente os braços',
      'Movimento controlado na volta'
    ],
    gender: 'both'
  },

  // EXERCÍCIOS ESPECÍFICOS PARA MULHERES
  {
    id: 'hip-thrust-maquina',
    name: 'Elevação de Quadril na Máquina',
    targetMuscles: ['Glúteo máximo', 'Posterior de coxa'],
    instructions: [
      'Sente-se com as costas apoiadas no banco',
      'Posicione a barra sobre o quadril com proteção',
      'Apoie os pés no chão na largura dos ombros',
      'Eleve o quadril contraindo os glúteos'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '75 segundos',
    difficulty: 'intermediário',
    equipment: ['Banco', 'Barra', 'Proteção para quadril'],
    gifUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Contraia bem os glúteos no topo',
      'Mantenha os joelhos estáveis',
      'Use proteção para conforto do quadril'
    ],
    gender: 'female'
  },
  {
    id: 'abducao-maquina',
    name: 'Abdução na Máquina',
    targetMuscles: ['Glúteo médio', 'Glúteo mínimo'],
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Posicione as pernas contra os apoios laterais',
      'Abra as pernas contra a resistência',
      'Retorne controladamente à posição inicial'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de abdução'],
    gifUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Movimento lento e controlado',
      'Foque na contração dos glúteos',
      'Mantenha as costas apoiadas'
    ],
    gender: 'female'
  },

  // EXERCÍCIOS CARDIO
  {
    id: 'esteira-hiit',
    name: 'Esteira HIIT',
    targetMuscles: ['Sistema cardiovascular', 'Pernas'],
    instructions: [
      'Aqueça por 5 minutos em ritmo moderado',
      'Alterne 30 segundos intensos com 60 segundos leves',
      'Repita por 15-20 minutos',
      'Finalize com 5 minutos de desaquecimento'
    ],
    sets: 1,
    reps: '15-20 min',
    restTime: 'Conforme protocolo',
    difficulty: 'intermediário',
    equipment: ['Esteira elétrica'],
    gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha hidratação durante o treino',
      'Ajuste inclinação para maior intensidade',
      'Respeite seus limites cardíacos'
    ],
    gender: 'both'
  },
  {
    id: 'eliptico',
    name: 'Elíptico',
    targetMuscles: ['Sistema cardiovascular', 'Corpo todo'],
    instructions: [
      'Posicione-se na máquina segurando as alças',
      'Inicie movimento coordenado de braços e pernas',
      'Mantenha ritmo constante por 20-30 minutos',
      'Varie a resistência durante o treino'
    ],
    sets: 1,
    reps: '20-30 min',
    restTime: 'N/A',
    difficulty: 'iniciante',
    equipment: ['Máquina elíptica'],
    gifUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    tips: [
      'Mantenha postura ereta',
      'Use tanto braços quanto pernas',
      'Baixo impacto, ideal para articulações'
    ],
    gender: 'both'
  }
]

// Planos de treino específicos para perda de peso
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'divisao-ab-masculino',
    name: 'Divisão AB - Masculino',
    description: 'Treino focado em hipertrofia e queima de gordura para homens',
    targetGoal: 'Perda de peso e ganho de massa magra',
    duration: '6-8 semanas',
    frequency: '4x por semana',
    gender: 'male',
    difficulty: 'intermediário',
    schedule: {
      segunda: {
        name: 'Treino A - Peito, Ombros e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado', 'voador', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta'],
        focusArea: 'Membros superiores - push',
        duration: '50-60 minutos'
      },
      terca: {
        name: 'Treino B - Pernas e Cardio',
        exercises: ['leg-press', 'cadeira-extensora', 'mesa-flexora', 'panturrilha-aparelho', 'esteira-hiit'],
        focusArea: 'Membros inferiores + cardio',
        duration: '45-55 minutos'
      },
      quarta: {
        name: 'Descanso',
        exercises: [],
        focusArea: 'Recuperação ativa',
        duration: 'Descanso ou caminhada leve'
      },
      quinta: {
        name: 'Treino A - Peito, Ombros e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado', 'voador', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta'],
        focusArea: 'Membros superiores - push',
        duration: '50-60 minutos'
      },
      sexta: {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['puxada-polia-alta', 'remada-sentada', 'rosca-direta-polia', 'eliptico'],
        focusArea: 'Membros superiores - pull + cardio',
        duration: '45-55 minutos'
      },
      sabado: {
        name: 'Cardio Optional',
        exercises: ['esteira-hiit', 'eliptico'],
        focusArea: 'Queima de gordura',
        duration: '30-40 minutos'
      },
      domingo: {
        name: 'Descanso',
        exercises: [],
        focusArea: 'Recuperação total',
        duration: 'Descanso completo'
      }
    }
  },
  {
    id: 'divisao-ab-feminino',
    name: 'Divisão AB - Feminino',
    description: 'Treino focado em tonificação e fortalecimento dos glúteos',
    targetGoal: 'Perda de peso e fortalecimento de glúteos',
    duration: '6-8 semanas',
    frequency: '4x por semana',
    gender: 'female',
    difficulty: 'intermediário',
    schedule: {
      segunda: {
        name: 'Treino A - Membros Superiores',
        exercises: ['supino-inclinado', 'voador', 'puxada-polia-alta', 'remada-sentada', 'desenvolvimento-maquina', 'triceps-polia-alta'],
        focusArea: 'Fortalecimento do tronco',
        duration: '45-55 minutos'
      },
      terca: {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['leg-press', 'hip-thrust-maquina', 'abducao-maquina', 'cadeira-extensora', 'mesa-flexora', 'panturrilha-aparelho'],
        focusArea: 'Glúteos e pernas',
        duration: '50-60 minutos'
      },
      quarta: {
        name: 'Cardio Moderado',
        exercises: ['eliptico', 'esteira-hiit'],
        focusArea: 'Queima de gordura',
        duration: '30-40 minutos'
      },
      quinta: {
        name: 'Treino A - Membros Superiores',
        exercises: ['supino-inclinado', 'voador', 'puxada-polia-alta', 'remada-sentada', 'elevacao-lateral-maquina', 'rosca-direta-polia'],
        focusArea: 'Fortalecimento do tronco',
        duration: '45-55 minutos'
      },
      sexta: {
        name: 'Treino B - Glúteos e Pernas',
        exercises: ['leg-press', 'hip-thrust-maquina', 'abducao-maquina', 'cadeira-extensora', 'mesa-flexora'],
        focusArea: 'Glúteos e pernas',
        duration: '45-55 minutos'
      },
      sabado: {
        name: 'Cardio Leve',
        exercises: ['eliptico'],
        focusArea: 'Recuperação ativa',
        duration: '25-35 minutos'
      },
      domingo: {
        name: 'Descanso',
        exercises: [],
        focusArea: 'Recuperação total',
        duration: 'Descanso completo'
      }
    }
  },
  {
    id: 'divisao-abc-avancado',
    name: 'Divisão ABC - Avançado',
    description: 'Treino avançado com divisão em 3 grupos musculares',
    targetGoal: 'Perda de peso e definição muscular',
    duration: '8-12 semanas',
    frequency: '6x por semana',
    gender: 'both',
    difficulty: 'avançado',
    schedule: {
      segunda: {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado', 'voador', 'triceps-polia-alta', 'desenvolvimento-maquina'],
        focusArea: 'Push - empurrar',
        duration: '60-70 minutos'
      },
      terca: {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['puxada-polia-alta', 'remada-sentada', 'rosca-direta-polia'],
        focusArea: 'Pull - puxar',
        duration: '50-60 minutos'
      },
      quarta: {
        name: 'Treino C - Pernas Completo',
        exercises: ['leg-press', 'cadeira-extensora', 'mesa-flexora', 'hip-thrust-maquina', 'abducao-maquina', 'panturrilha-aparelho'],
        focusArea: 'Membros inferiores',
        duration: '60-70 minutos'
      },
      quinta: {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado', 'voador', 'triceps-polia-alta', 'elevacao-lateral-maquina'],
        focusArea: 'Push - empurrar',
        duration: '60-70 minutos'
      },
      sexta: {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['puxada-polia-alta', 'remada-sentada', 'rosca-direta-polia'],
        focusArea: 'Pull - puxar',
        duration: '50-60 minutos'
      },
      sabado: {
        name: 'Treino C - Pernas + Cardio',
        exercises: ['leg-press', 'hip-thrust-maquina', 'cadeira-extensora', 'esteira-hiit'],
        focusArea: 'Pernas + queima de gordura',
        duration: '55-65 minutos'
      },
      domingo: {
        name: 'Cardio ou Descanso',
        exercises: ['eliptico'],
        focusArea: 'Recuperação ativa',
        duration: '30 minutos ou descanso'
      }
    }
  }
] 