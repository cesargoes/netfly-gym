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

// EXERCÍCIOS BASEADOS EM EVIDÊNCIA CIENTÍFICA PARA PERDA DE PESO
export const exercises: Exercise[] = [
  // EXERCÍCIOS COMPOSTOS SUPERIORES - ESTUDOS COMPROVAM MAIOR EFICIÊNCIA
  
  // PEITO + TRICEPS + OMBROS (Compostos principais)
  {
    id: 'supino-reto',
    name: 'Supino Reto',
    targetMuscles: ['Peitoral maior', 'Tríceps', 'Deltoides anterior'],
    instructions: [
      'Deite-se no banco com os pés apoiados no chão',
      'Segure a barra com pegada ligeiramente mais larga que os ombros',
      'Desça a barra controladamente até tocar o peito',
      'Empurre a barra para cima até extensão completa dos braços',
      'FOCO: Movimento explosivo na subida, controlado na descida'
    ],
    sets: 4,
    reps: '8-12',
    restTime: '90 segundos',
    difficulty: 'intermediário',
    equipment: ['Banco reto', 'Barra', 'Anilhas'],
    tips: [
      'EVIDÊNCIA: Exercícios compostos geram 40% mais gasto calórico',
      'Mantenha core contraído durante todo movimento',
      'Respire na descida, expire no esforço máximo'
    ],
    gender: 'both'
  },
  {
    id: 'supino-inclinado-halteres',
    name: 'Supino Inclinado com Halteres',
    targetMuscles: ['Peitoral superior', 'Deltoides anterior', 'Tríceps'],
    instructions: [
      'Sente-se no banco inclinado a 45 graus',
      'Segure um halter em cada mão na altura do peito',
      'Empurre os halteres para cima em movimento convergente',
      'Desça controladamente até sentir alongamento no peito',
      'FOCO: Amplitude completa para máximo recrutamento muscular'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '75 segundos',
    difficulty: 'intermediário',
    equipment: ['Banco inclinado', 'Halteres'],
    tips: [
      'CIÊNCIA: Maior ativação do peitoral superior comprovada',
      'Halteres permitem maior amplitude que barra',
      'Mantenha punhos neutros para proteger articulações'
    ],
    gender: 'both'
  },

  // COSTAS + BICEPS + CORE (Compostos essenciais)
  {
    id: 'puxada-polia-alta',
    name: 'Puxada na Polia Alta',
    targetMuscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps', 'Core'],
    instructions: [
      'Sente-se na máquina com pegada pronada, mãos mais largas que ombros',
      'Inicie o movimento puxando os cotovelos para baixo e trás',
      'Leve a barra até a altura do peito',
      'Controle a subida resistindo ao peso',
      'FOCO: Pensamento "cotovelos para o bolso traseiro"'
    ],
    sets: 4,
    reps: '8-12',
    restTime: '90 segundos',
    difficulty: 'intermediário',
    equipment: ['Polia alta', 'Barra'],
    tips: [
      'EVIDÊNCIA: Exercício composto recruta 85% dos músculos do tronco',
      'Evite balançar o corpo, trabalho isolado das costas',
      'Foque na contração das escápulas'
    ],
    gender: 'both'
  },
  {
    id: 'remada-sentada-polia',
    name: 'Remada Sentada na Polia',
    targetMuscles: ['Latíssimo do dorso', 'Romboides', 'Trapézio médio', 'Bíceps'],
    instructions: [
      'Sente-se na máquina com pegada neutra',
      'Mantenha coluna ereta e core contraído',
      'Puxe os cotovelos para trás, aproximando escápulas',
      'Controle o retorno à posição inicial',
      'FOCO: Movimento lento e controlado em ambas fases'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '75 segundos',
    difficulty: 'iniciante',
    equipment: ['Polia baixa', 'Triângulo'],
    tips: [
      'CIÊNCIA: Melhora postura e ativa músculos estabilizadores',
      'Evite usar momentum, movimento puramente muscular',
      'Imagine "quebrar gravata" ao puxar'
    ],
    gender: 'both'
  },

  // PERNAS + GLÚTEOS (Maior gasto calórico comprovado)
  {
    id: 'leg-press',
    name: 'Leg Press',
    targetMuscles: ['Quadríceps', 'Glúteos', 'Isquiotibiais'],
    instructions: [
      'Posicione-se na máquina com pés na largura dos ombros',
      'Desça controladamente até 90 graus no joelho',
      'Empurre a plataforma com força, estendendo as pernas',
      'Não trave completamente os joelhos no topo',
      'FOCO: Movimento explosivo na subida, controlado na descida'
    ],
    sets: 4,
    reps: '12-20',
    restTime: '2 minutos',
    difficulty: 'iniciante',
    equipment: ['Leg Press'],
    tips: [
      'EVIDÊNCIA: Exercício #1 para gasto calórico em membros inferiores',
      'Posição dos pés altera recrutamento muscular',
      'Mantenha core contraído durante todo exercício'
    ],
    gender: 'both'
  },
  {
    id: 'cadeira-extensora',
    name: 'Cadeira Extensora',
    targetMuscles: ['Quadríceps (reto femoral, vastos)'],
    instructions: [
      'Sente-se na máquina, ajuste o apoio atrás do calcanhar',
      'Segure as laterais do banco para estabilização',
      'Estenda as pernas até quase máxima extensão',
      'Desça controladamente resistindo ao peso',
      'FOCO: Tensão constante no quadríceps'
    ],
    sets: 3,
    reps: '12-18',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Cadeira extensora'],
    tips: [
      'CIÊNCIA: Isolamento perfeito do quadríceps',
      'Evite hiperextensão do joelho',
      'Pausa de 1 segundo no topo para máxima contração'
    ],
    gender: 'both'
  },
  {
    id: 'mesa-flexora',
    name: 'Mesa Flexora',
    targetMuscles: ['Isquiotibiais', 'Glúteos'],
    instructions: [
      'Deite-se de bruços na máquina',
      'Posicione o apoio na altura do calcanhar',
      'Flexione os joelhos trazendo calcanhar em direção ao glúteo',
      'Desça controladamente até extensão quase completa',
      'FOCO: Contração máxima dos isquiotibiais'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Mesa flexora'],
    tips: [
      'EVIDÊNCIA: Fundamental para equilíbrio muscular das pernas',
      'Mantenha quadril pressionado no banco',
      'Movimento lento e controlado'
    ],
    gender: 'both'
  },
  {
    id: 'panturrilha-aparelho',
    name: 'Panturrilha no Aparelho',
    targetMuscles: ['Gastrocnêmio', 'Sóleo'],
    instructions: [
      'Posicione-se na máquina com ombros sob o apoio',
      'Coloque a ponta dos pés na plataforma',
      'Eleve-se na ponta dos pés o máximo possível',
      'Desça controladamente até sentir alongamento',
      'FOCO: Amplitude completa para máximo desenvolvimento'
    ],
    sets: 4,
    reps: '15-25',
    restTime: '45 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de panturrilha'],
    tips: [
      'CIÊNCIA: Panturrilhas precisam alto volume para crescer',
      'Pausa de 2 segundos no topo',
      'Varie ângulo dos pés: neutro, para dentro, para fora'
    ],
    gender: 'both'
  },

  // OMBROS (Compostos + isolados estratégicos)
  {
    id: 'desenvolvimento-maquina',
    name: 'Desenvolvimento na Máquina',
    targetMuscles: ['Deltoides (anterior, médio)', 'Tríceps'],
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Segure as pegas na altura dos ombros',
      'Empurre para cima até quase extensão completa',
      'Desça controladamente até ângulo de 90 graus',
      'FOCO: Movimento vertical puro'
    ],
    sets: 3,
    reps: '10-15',
    restTime: '75 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de desenvolvimento'],
    tips: [
      'EVIDÊNCIA: Movimento composto mais seguro para ombros',
      'Evite descer demais para proteger articulação',
      'Core contraído durante todo movimento'
    ],
    gender: 'both'
  },
  {
    id: 'elevacao-lateral-maquina',
    name: 'Elevação Lateral na Máquina',
    targetMuscles: ['Deltoides médio'],
    instructions: [
      'Sente-se na máquina, ajuste a altura do banco',
      'Posicione braços nos apoios laterais',
      'Eleve os braços até altura dos ombros',
      'Desça controladamente resistindo ao peso',
      'FOCO: Movimento puro de abdução do ombro'
    ],
    sets: 3,
    reps: '12-18',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de elevação lateral'],
    tips: [
      'CIÊNCIA: Único movimento que isola deltoides médio efetivamente',
      'Evite usar momentum',
      'Mantenha ombros para baixo durante movimento'
    ],
    gender: 'both'
  },

  // BRAÇOS (Isolados estratégicos para finalização)
  {
    id: 'rosca-direta-polia',
    name: 'Rosca Direta na Polia',
    targetMuscles: ['Bíceps braquial', 'Braquial'],
    instructions: [
      'Fique em pé de frente para a polia baixa',
      'Segure a barra com pegada supinada',
      'Flexione os cotovelos elevando a barra',
      'Controle a descida até extensão quase completa',
      'FOCO: Isolamento total dos bíceps'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Polia baixa', 'Barra reta'],
    tips: [
      'ESTRATÉGIA: Isolado após compostos para finalização',
      'Mantenha cotovelos fixos ao lado do corpo',
      'Tensão constante, sem relaxar em baixo'
    ],
    gender: 'both'
  },
  {
    id: 'triceps-polia-alta',
    name: 'Tríceps na Polia Alta',
    targetMuscles: ['Tríceps braquial (cabeças lateral, longa, medial)'],
    instructions: [
      'Fique em pé de frente para a polia alta',
      'Segure a barra com pegada pronada',
      'Mantenha cotovelos fixos ao lado do corpo',
      'Estenda os antebraços para baixo',
      'FOCO: Movimento puro de extensão do cotovelo'
    ],
    sets: 3,
    reps: '12-15',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Polia alta', 'Barra reta'],
    tips: [
      'EVIDÊNCIA: Melhor exercício para isolamento do tríceps',
      'Evite movimento do ombro',
      'Aperte no final do movimento'
    ],
    gender: 'both'
  },

  // CORE/FUNCIONAL (Específicos para mulheres)
  {
    id: 'elevacao-quadril-maquina',
    name: 'Elevação de Quadril na Máquina',
    targetMuscles: ['Glúteos', 'Core', 'Isquiotibiais'],
    instructions: [
      'Posicione-se na máquina com apoio nas costas',
      'Coloque o apoio sobre os quadris',
      'Eleve o quadril contraindo glúteos',
      'Pause por 1 segundo no topo',
      'FOCO: Máxima contração dos glúteos'
    ],
    sets: 4,
    reps: '15-20',
    restTime: '60 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de hip thrust'],
    tips: [
      'ESPECÍFICO: Excelente para desenvolvimento glúteo feminino',
      'Pense em "empurrar o chão com os pés"',
      'Evite hiperextensão da lombar'
    ],
    gender: 'female'
  },
  {
    id: 'abducao-maquina',
    name: 'Abdução na Máquina',
    targetMuscles: ['Glúteo médio', 'Glúteo mínimo'],
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Posicione as pernas nos apoios laterais',
      'Abra as pernas contra a resistência',
      'Retorne controladamente à posição inicial',
      'FOCO: Contração dos glúteos laterais'
    ],
    sets: 3,
    reps: '15-20',
    restTime: '45 segundos',
    difficulty: 'iniciante',
    equipment: ['Máquina de abdução'],
    tips: [
      'BENEFÍCIO: Fortalece glúteos estabilizadores',
      'Movimento lento e controlado',
      'Pausa de 1 segundo na abertura máxima'
    ],
    gender: 'both'
  },

  // CARDIO/HIIT (Comprovadamente eficaz para perda de peso)
  {
    id: 'esteira-hiit',
    name: 'Esteira HIIT',
    targetMuscles: ['Sistema cardiovascular', 'Pernas', 'Core'],
    instructions: [
      'Aquecimento: 3 minutos caminhada moderada',
      'Sprint: 30 segundos alta intensidade (8-9/10)',
      'Recuperação: 90 segundos caminhada leve',
      'Repita ciclo 8-12 vezes',
      'FOCO: Máxima intensidade nos sprints'
    ],
    sets: 1,
    reps: '8-12 ciclos',
    restTime: 'Conforme protocolo',
    difficulty: 'intermediário',
    equipment: ['Esteira'],
    tips: [
      'EVIDÊNCIA: HIIT queima 25-30% mais calorias que cardio tradicional',
      'Monitore frequência cardíaca',
      'Hidrate-se adequadamente'
    ],
    gender: 'both'
  },
  {
    id: 'eliptico',
    name: 'Elíptico',
    targetMuscles: ['Sistema cardiovascular', 'Pernas', 'Braços'],
    instructions: [
      'Posicione-se no equipamento, pegue nas alças',
      'Mantenha postura ereta durante movimento',
      'Varie entre moderado e alta intensidade',
      'Use braços ativamente para maior gasto',
      'FOCO: Movimento fluido e coordenado'
    ],
    sets: 1,
    reps: '20-40 min',
    restTime: 'N/A',
    difficulty: 'iniciante',
    equipment: ['Elíptico'],
    tips: [
      'VANTAGEM: Baixo impacto, alto gasto calórico',
      'Varie resistência durante treino',
      'Movimento tanto para frente quanto para trás'
    ],
    gender: 'both'
  }
]

// PLANOS DE TREINO ATUALIZADOS COM BASE CIENTÍFICA
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'divisao-ab-masculino',
    name: 'Divisão AB - Masculino',
    description: 'Treino baseado em evidências científicas para máxima perda de peso masculina. Prioriza exercícios compostos comprovadamente eficazes.',
    targetGoal: 'Perda de peso e definição muscular',
    duration: '45-60 minutos',
    frequency: '4x por semana',
    gender: 'male',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Peito, Ombros e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado-halteres', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta', 'esteira-hiit'],
        focusArea: 'Tronco superior e cardio HIIT',
        duration: '50 minutos'
      },
      'terça': {
        name: 'Treino B - Costas, Pernas e Bíceps',
        exercises: ['leg-press', 'puxada-polia-alta', 'remada-sentada-polia', 'cadeira-extensora', 'mesa-flexora', 'rosca-direta-polia'],
        focusArea: 'Costas, pernas e bíceps',
        duration: '55 minutos'
      },
      'quarta': {
        name: 'Descanso Ativo',
        exercises: ['eliptico'],
        focusArea: 'Recuperação e cardio leve',
        duration: '30 minutos'
      },
      'quinta': {
        name: 'Treino B - Costas, Pernas e Bíceps',
        exercises: ['leg-press', 'puxada-polia-alta', 'remada-sentada-polia', 'cadeira-extensora', 'mesa-flexora', 'rosca-direta-polia'],
        focusArea: 'Costas, pernas e bíceps',
        duration: '55 minutos'
      },
      'sexta': {
        name: 'Treino A - Peito, Ombros e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado-halteres', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta', 'esteira-hiit'],
        focusArea: 'Tronco superior e cardio HIIT',
        duration: '50 minutos'
      },
      'sabado': {
        name: 'Cardio + Panturrilha',
        exercises: ['eliptico', 'panturrilha-aparelho'],
        focusArea: 'Cardio e finalização',
        duration: '35 minutos'
      },
      'domingo': {
        name: 'Descanso',
        exercises: [],
        focusArea: 'Recuperação completa',
        duration: '0 minutos'
      }
    }
  },
  {
    id: 'divisao-ab-feminino',
    name: 'Divisão AB - Feminino',
    description: 'Programa científico feminino focado em perda de peso, fortalecimento glúteos e definição geral. Combina exercícios compostos e específicos.',
    targetGoal: 'Perda de peso, glúteos e definição',
    duration: '45-55 minutos',
    frequency: '4x por semana',
    gender: 'female',
    difficulty: 'intermediário',
    schedule: {
      'segunda': {
        name: 'Treino A - Glúteos, Pernas e Core',
        exercises: ['leg-press', 'elevacao-quadril-maquina', 'cadeira-extensora', 'mesa-flexora', 'abducao-maquina', 'panturrilha-aparelho'],
        focusArea: 'Membros inferiores e glúteos',
        duration: '50 minutos'
      },
      'terça': {
        name: 'Treino B - Peito, Costas e Braços',
        exercises: ['supino-inclinado-halteres', 'puxada-polia-alta', 'remada-sentada-polia', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta'],
        focusArea: 'Tronco superior',
        duration: '45 minutos'
      },
      'quarta': {
        name: 'Cardio HIIT',
        exercises: ['esteira-hiit'],
        focusArea: 'Queima de gordura máxima',
        duration: '25 minutos'
      },
      'quinta': {
        name: 'Treino B - Peito, Costas e Braços',
        exercises: ['supino-inclinado-halteres', 'puxada-polia-alta', 'remada-sentada-polia', 'desenvolvimento-maquina', 'elevacao-lateral-maquina', 'triceps-polia-alta'],
        focusArea: 'Tronco superior',
        duration: '45 minutos'
      },
      'sexta': {
        name: 'Treino A - Glúteos, Pernas e Core',
        exercises: ['leg-press', 'elevacao-quadril-maquina', 'cadeira-extensora', 'mesa-flexora', 'abducao-maquina', 'panturrilha-aparelho'],
        focusArea: 'Membros inferiores e glúteos',
        duration: '50 minutos'
      },
      'sabado': {
        name: 'Cardio Moderado',
        exercises: ['eliptico'],
        focusArea: 'Recuperação ativa',
        duration: '30 minutos'
      },
      'domingo': {
        name: 'Descanso',
        exercises: [],
        focusArea: 'Recuperação completa',
        duration: '0 minutos'
      }
    }
  },
  {
    id: 'divisao-abc-avancado',
    name: 'Divisão ABC - Avançado',
    description: 'Programa avançado de alta frequência baseado em pesquisas para máximos resultados. Combina força, hipertrofia e queima de gordura.',
    targetGoal: 'Recomposição corporal completa',
    duration: '60-75 minutos',
    frequency: '6x por semana',
    gender: 'both',
    difficulty: 'avançado',
    schedule: {
      'segunda': {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado-halteres', 'desenvolvimento-maquina', 'triceps-polia-alta', 'esteira-hiit'],
        focusArea: 'Peito, tríceps e cardio',
        duration: '60 minutos'
      },
      'terça': {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['puxada-polia-alta', 'remada-sentada-polia', 'rosca-direta-polia', 'elevacao-lateral-maquina'],
        focusArea: 'Costas, bíceps e ombros',
        duration: '55 minutos'
      },
      'quarta': {
        name: 'Treino C - Pernas Completo',
        exercises: ['leg-press', 'cadeira-extensora', 'mesa-flexora', 'elevacao-quadril-maquina', 'abducao-maquina', 'panturrilha-aparelho'],
        focusArea: 'Membros inferiores completo',
        duration: '70 minutos'
      },
      'quinta': {
        name: 'Treino A - Peito e Tríceps',
        exercises: ['supino-reto', 'supino-inclinado-halteres', 'desenvolvimento-maquina', 'triceps-polia-alta', 'esteira-hiit'],
        focusArea: 'Peito, tríceps e cardio',
        duration: '60 minutos'
      },
      'sexta': {
        name: 'Treino B - Costas e Bíceps',
        exercises: ['puxada-polia-alta', 'remada-sentada-polia', 'rosca-direta-polia', 'elevacao-lateral-maquina'],
        focusArea: 'Costas, bíceps e ombros',
        duration: '55 minutos'
      },
      'sabado': {
        name: 'Treino C - Pernas + Cardio',
        exercises: ['leg-press', 'cadeira-extensora', 'mesa-flexora', 'panturrilha-aparelho', 'eliptico'],
        focusArea: 'Pernas e queima de gordura',
        duration: '65 minutos'
      },
      'domingo': {
        name: 'Cardio Leve',
        exercises: ['eliptico'],
        focusArea: 'Recuperação ativa',
        duration: '30 minutos'
      }
    }
  }
] 