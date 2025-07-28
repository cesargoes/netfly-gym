'use client'

import { useState, useEffect } from 'react'
import { BarChart3, Calendar, Clock, Flame, Trophy, Target, TrendingUp, Trash2 } from 'lucide-react'

interface WorkoutData {
  id: string
  name: string
  focusArea: string
  exercises: number
  calories: number
  duration: number
  startTime: string
  endTime: string
  date: string
  userGender: 'male' | 'female'
}

interface ProgressTabProps {
  userGender: 'male' | 'female'
}

export default function ProgressTab({ userGender }: ProgressTabProps) {
  const [workoutHistory, setWorkoutHistory] = useState<WorkoutData[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('week')

  useEffect(() => {
    // Carregar histórico do localStorage
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]')
    // Filtrar por gênero do usuário atual e ordenar por data (mais recente primeiro)
    const userHistory = history
      .filter((workout: WorkoutData) => workout.userGender === userGender)
      .sort((a: WorkoutData, b: WorkoutData) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
    setWorkoutHistory(userHistory)
  }, [userGender])

  const clearHistory = () => {
    if (confirm('Tem certeza que deseja limpar todo o histórico de treinos?')) {
      // Manter treinos do outro usuário
      const allHistory = JSON.parse(localStorage.getItem('workoutHistory') || '[]')
      const otherUserHistory = allHistory.filter((workout: WorkoutData) => workout.userGender !== userGender)
      localStorage.setItem('workoutHistory', JSON.stringify(otherUserHistory))
      setWorkoutHistory([])
    }
  }

  // Filtrar por período
  const getFilteredWorkouts = () => {
    const now = new Date()
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    switch (selectedPeriod) {
      case 'week':
        return workoutHistory.filter(workout => new Date(workout.startTime) >= oneWeekAgo)
      case 'month':
        return workoutHistory.filter(workout => new Date(workout.startTime) >= oneMonthAgo)
      default:
        return workoutHistory
    }
  }

  const filteredWorkouts = getFilteredWorkouts()

  // Calcular estatísticas
  const totalWorkouts = filteredWorkouts.length
  const totalMinutes = filteredWorkouts.reduce((sum, workout) => sum + workout.duration, 0)
  const totalCalories = filteredWorkouts.reduce((sum, workout) => sum + workout.calories, 0)
  const averageDuration = totalWorkouts > 0 ? Math.round(totalMinutes / totalWorkouts) : 0

  // Agrupar treinos por tipo
  const workoutsByType = filteredWorkouts.reduce((acc, workout) => {
    const type = workout.name.match(/Treino ([A-D])/) ? workout.name.match(/Treino ([A-D])/)![1] : 'Outro'
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {} as { [key: string]: number })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
  }

  const getPeriodLabel = () => {
    switch (selectedPeriod) {
      case 'week': return 'últimos 7 dias'
      case 'month': return 'últimos 30 dias'
      default: return 'todo período'
    }
  }

  if (workoutHistory.length === 0) {
    return (
      <div className="space-y-6">
        <div className="ios-card text-center py-12">
          <Trophy className="w-16 h-16 text-ios-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ios-gray-900 mb-2">
            Nenhum treino registrado ainda
          </h3>
          <p className="text-ios-gray-600 mb-4">
            Complete seu primeiro treino na aba "Hoje" para começar a acompanhar seu progresso!
          </p>
          <div className="inline-flex items-center text-sm text-ios-blue font-medium">
            <Target className="w-4 h-4 mr-2" />
            Vá treinar agora!
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header e filtros */}
      <div className="ios-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-ios-gray-900">
            Seu Progresso 📊
          </h2>
          <button
            onClick={clearHistory}
            className="text-red-500 hover:text-red-600 transition-colors p-2"
            title="Limpar histórico"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex space-x-2">
          {[
            { id: 'week', label: '7 dias' },
            { id: 'month', label: '30 dias' },
            { id: 'all', label: 'Tudo' }
          ].map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id as any)}
              className={`px-3 py-2 rounded-ios text-sm font-medium transition-colors ${
                selectedPeriod === period.id
                  ? 'bg-ios-blue text-white'
                  : 'bg-ios-gray-100 text-ios-gray-700 hover:bg-ios-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 gap-4">
        <div className="ios-card text-center">
          <div className="text-2xl font-bold text-ios-blue mb-1">{totalWorkouts}</div>
          <div className="text-sm text-ios-gray-600 flex items-center justify-center">
            <Trophy className="w-4 h-4 mr-1" />
            Treinos
          </div>
        </div>
        <div className="ios-card text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">{totalMinutes}</div>
          <div className="text-sm text-ios-gray-600 flex items-center justify-center">
            <Clock className="w-4 h-4 mr-1" />
            Minutos
          </div>
        </div>
        <div className="ios-card text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">{totalCalories}</div>
          <div className="text-sm text-ios-gray-600 flex items-center justify-center">
            <Flame className="w-4 h-4 mr-1" />
            Calorias
          </div>
        </div>
        <div className="ios-card text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">{averageDuration}</div>
          <div className="text-sm text-ios-gray-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            Média/treino
          </div>
        </div>
      </div>

      {/* Resumo do período */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-3">
          Resumo dos {getPeriodLabel()}
        </h3>
        
        {Object.keys(workoutsByType).length > 0 ? (
          <div className="space-y-2">
            {Object.entries(workoutsByType).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between py-2 px-3 bg-ios-gray-50 rounded-ios">
                <span className="font-medium text-ios-gray-900">Treino {type}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-ios-gray-600">{count}x</span>
                  <div className="w-2 h-2 bg-ios-blue rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-ios-gray-600 text-center py-4">
            Nenhum treino no período selecionado
          </p>
        )}
      </div>

      {/* Histórico detalhado */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Histórico Detalhado
        </h3>
        
        <div className="space-y-3">
          {filteredWorkouts.slice(0, 10).map((workout) => (
            <div key={workout.id} className="border border-ios-gray-200 rounded-ios p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-ios-gray-900">{workout.name}</h4>
                <span className="text-sm text-ios-gray-500">{formatDate(workout.startTime)}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-ios-gray-500" />
                  <span className="text-ios-gray-600">{workout.duration}min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-ios-gray-600">{workout.calories} cal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4 text-ios-blue" />
                  <span className="text-ios-gray-600">{workout.exercises} ex.</span>
                </div>
              </div>
              
              <p className="text-sm text-ios-gray-600 mt-2">
                <strong>Foco:</strong> {workout.focusArea}
              </p>
            </div>
          ))}
          
          {filteredWorkouts.length > 10 && (
            <div className="text-center py-3">
              <span className="text-sm text-ios-gray-500">
                Mostrando 10 de {filteredWorkouts.length} treinos
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 