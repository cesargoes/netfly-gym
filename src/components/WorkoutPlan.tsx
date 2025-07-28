'use client'

import { Calendar, Target, Clock, TrendingUp, BarChart3 } from 'lucide-react'
import type { WorkoutPlan as WorkoutPlanType } from '@/data/exercises'

interface WorkoutPlanProps {
  plan: WorkoutPlanType
  userGender: 'male' | 'female'
}

export default function WorkoutPlan({ plan, userGender }: WorkoutPlanProps) {
  const weekDays = [
    { key: 'segunda', name: 'Segunda', short: 'SEG' },
    { key: 'terca', name: 'Terça', short: 'TER' },
    { key: 'quarta', name: 'Quarta', short: 'QUA' },
    { key: 'quinta', name: 'Quinta', short: 'QUI' },
    { key: 'sexta', name: 'Sexta', short: 'SEX' },
    { key: 'sabado', name: 'Sábado', short: 'SAB' },
    { key: 'domingo', name: 'Domingo', short: 'DOM' }
  ]

  // Corrigir detecção do dia atual
  const currentDay = new Date()
    .toLocaleDateString('pt-BR', { weekday: 'long' })
    .toLowerCase()
    .replace('-feira', '') // Remove "-feira" de "segunda-feira" -> "segunda"

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'iniciante':
        return 'bg-green-100 text-green-800'
      case 'intermediário':
        return 'bg-yellow-100 text-yellow-800'
      case 'avançado':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header do Plano */}
      <div className="ios-card">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-ios-gray-900 mb-2">
              {plan.name}
            </h2>
            <p className="text-ios-gray-600 mb-3">
              {plan.description}
            </p>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plan.difficulty)}`}>
              {plan.difficulty}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl mb-1">
              {userGender === 'male' ? '💪' : '🏋️‍♀️'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-ios-blue" />
            <span className="text-sm font-medium text-ios-gray-900">Objetivo:</span>
            <span className="text-sm text-ios-gray-700">{plan.targetGoal}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-ios-gray-900">Duração:</span>
            <span className="text-sm text-ios-gray-700">{plan.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-medium text-ios-gray-900">Frequência:</span>
            <span className="text-sm text-ios-gray-700">{plan.frequency}</span>
          </div>
        </div>
      </div>

      {/* Cronograma Semanal */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-ios-gray-900 px-1">
          Cronograma Semanal
        </h3>

        {weekDays.map((day) => {
          const dayWorkout = plan.schedule[day.key]
          const isToday = currentDay === day.key
          const hasWorkout = !!dayWorkout

          return (
            <div
              key={day.key}
              className={`ios-card transition-all duration-200 ${
                isToday ? 'ring-2 ring-ios-blue bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    hasWorkout ? 'bg-ios-blue' : 'bg-ios-gray-400'
                  }`}>
                    {day.short}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isToday ? 'text-ios-blue' : 'text-ios-gray-900'}`}>
                      {day.name}
                      {isToday && <span className="ml-2 text-sm">(Hoje)</span>}
                    </h4>
                    {hasWorkout ? (
                      <div className="space-y-1">
                        <p className="text-sm text-ios-gray-700 font-medium">
                          {dayWorkout.name}
                        </p>
                        <p className="text-xs text-ios-gray-600">
                          {dayWorkout.focusArea} • {dayWorkout.duration}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-ios-gray-500">Descanso</p>
                    )}
                  </div>
                </div>
                
                {hasWorkout && (
                  <div className="text-right">
                    <div className="text-lg">
                      {dayWorkout.exercises.length}
                    </div>
                    <div className="text-xs text-ios-gray-600">exercícios</div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Estatísticas do Plano */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Estatísticas do Plano
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-ios-blue mb-1">
              {Object.keys(plan.schedule).length}
            </div>
            <div className="text-sm text-ios-gray-600">Dias de treino/semana</div>
          </div>
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {Object.values(plan.schedule).reduce((total, workout) => total + workout.exercises.length, 0)}
            </div>
            <div className="text-sm text-ios-gray-600">Total de exercícios</div>
          </div>
        </div>
      </div>

      {/* Dicas para o Sucesso */}
      <div className="ios-card">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-ios-gray-900">
            Dicas para o Sucesso
          </h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 border border-green-200 rounded-ios">
            <h4 className="font-medium text-green-800 mb-1">💧 Hidratação</h4>
            <p className="text-sm text-green-700">
              Beba pelo menos 2 litros de água por dia. Mantenha-se hidratado antes, durante e após os treinos.
            </p>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-ios">
            <h4 className="font-medium text-blue-800 mb-1">😴 Descanso</h4>
            <p className="text-sm text-blue-700">
              Durma 7-8 horas por noite. O descanso é fundamental para a recuperação muscular e perda de peso.
            </p>
          </div>
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-ios">
            <h4 className="font-medium text-orange-800 mb-1">🥗 Alimentação</h4>
            <p className="text-sm text-orange-700">
              Mantenha uma dieta equilibrada rica em proteínas, vegetais e carboidratos complexos. Evite açúcares e processados.
            </p>
          </div>
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-ios">
            <h4 className="font-medium text-purple-800 mb-1">📈 Consistência</h4>
            <p className="text-sm text-purple-700">
              A regularidade é a chave do sucesso. É melhor treinar 30 minutos todo dia do que 2 horas uma vez por semana.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 