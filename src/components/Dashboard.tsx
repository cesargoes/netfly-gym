'use client'

import { useState } from 'react'
import { Calendar, Dumbbell, User, BarChart3, LogOut, Play, Target, Clock } from 'lucide-react'
import { workoutPlans } from '@/data/exercises'
import WorkoutDay from './WorkoutDay'
import WorkoutPlan from './WorkoutPlan'
import UserProfile from './UserProfile'

interface DashboardProps {
  user: string
  onLogout: () => void
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'today' | 'plan' | 'progress' | 'profile'>('today')
  
  const userGender = user === 'marido' ? 'male' : 'female'
  const userName = user === 'marido' ? 'Marido' : 'Esposa'
  
  // Encontrar o plano de treino adequado para o usuário
  const userWorkoutPlan = workoutPlans.find(plan => 
    plan.gender === userGender || plan.gender === 'both'
  ) || workoutPlans[0]
  
  // Obter o dia da semana atual e remover "-feira" se existir
  const currentDay = new Date()
    .toLocaleDateString('pt-BR', { weekday: 'long' })
    .toLowerCase()
    .replace('-feira', '') // Remove "-feira" de "segunda-feira" -> "segunda"
  
  const todayWorkout = userWorkoutPlan.schedule[currentDay]
  
  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return (
          <div className="space-y-6">
            {/* Header do dia */}
            <div className="ios-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-ios-gray-900">
                    Olá, {userName}! 👋
                  </h2>
                  <p className="text-ios-gray-600 capitalize">
                    {new Date().toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-ios-blue">
                    {todayWorkout ? '💪' : '😴'}
                  </div>
                </div>
              </div>
              
              {todayWorkout ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-ios-blue" />
                    <span className="font-medium text-ios-gray-900">
                      {todayWorkout.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-ios-gray-500" />
                    <span className="text-ios-gray-600">
                      {todayWorkout.duration}
                    </span>
                  </div>
                  <div className="bg-ios-gray-50 rounded-ios p-3">
                    <p className="text-sm text-ios-gray-700">
                      <strong>Foco:</strong> {todayWorkout.focusArea}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-ios-gray-50 rounded-ios p-4 text-center">
                  <h3 className="font-medium text-ios-gray-900 mb-2">
                    Dia de Descanso
                  </h3>
                  <p className="text-sm text-ios-gray-600">
                    Hoje é seu dia de recuperação. Aproveite para relaxar e se preparar para o próximo treino!
                  </p>
                </div>
              )}
            </div>

            {/* Treino de hoje */}
            {todayWorkout && (
              <WorkoutDay 
                workout={todayWorkout}
                userGender={userGender}
              />
            )}

            {/* Estatísticas rápidas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="ios-card text-center">
                <div className="text-2xl font-bold text-ios-blue mb-1">
                  {Object.keys(userWorkoutPlan.schedule).length}
                </div>
                <div className="text-sm text-ios-gray-600">Dias/semana</div>
              </div>
              <div className="ios-card text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  40-60
                </div>
                <div className="text-sm text-ios-gray-600">Min/treino</div>
              </div>
            </div>
          </div>
        )
      
      case 'plan':
        return <WorkoutPlan plan={userWorkoutPlan} userGender={userGender} />
      
      case 'progress':
        return (
          <div className="space-y-6">
            <div className="ios-card text-center">
              <BarChart3 className="w-16 h-16 text-ios-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-ios-gray-900 mb-2">
                Progresso em Desenvolvimento
              </h3>
              <p className="text-ios-gray-600">
                Em breve você poderá acompanhar seu progresso, registrar treinos e ver sua evolução!
              </p>
            </div>
          </div>
        )
      
      case 'profile':
        return <UserProfile user={user} onLogout={onLogout} />
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-ios-gray-50">
      {/* Content */}
      <div className="pb-20 pt-4 px-4">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-ios-gray-200 pb-safe-bottom">
        <div className="flex justify-around py-2">
          {[
            { id: 'today', icon: Calendar, label: 'Hoje' },
            { id: 'plan', icon: Dumbbell, label: 'Plano' },
            { id: 'progress', icon: BarChart3, label: 'Progresso' },
            { id: 'profile', icon: User, label: 'Perfil' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center py-2 px-4 rounded-ios transition-colors duration-150 ${
                activeTab === tab.id
                  ? 'bg-ios-blue/10 text-ios-blue'
                  : 'text-ios-gray-500 hover:text-ios-gray-700'
              }`}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 