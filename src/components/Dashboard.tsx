'use client'

import { useState } from 'react'
import { Calendar, Dumbbell, User, BarChart3, LogOut, Play, Target, Clock, ChevronDown } from 'lucide-react'
import { workoutPlans } from '@/data/exercises'
import WorkoutDay from './WorkoutDay'
import WorkoutPlan from './WorkoutPlan'
import UserProfile from './UserProfile'
import ProgressTab from './ProgressTab'
import CustomizablePlan from './CustomizablePlan'

interface DashboardProps {
  user: string
  onLogout: () => void
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'today' | 'plan' | 'progress' | 'profile'>('today')
  const [selectedWorkoutType, setSelectedWorkoutType] = useState<'A' | 'B' | 'C' | 'D'>('A')
  
  const userGender = user === 'marido' ? 'male' : 'female'
  const userName = user === 'marido' ? 'Marido' : 'Esposa'
  
  // Encontrar o plano de treino adequado para o usuário
  const userWorkoutPlan = workoutPlans.find(plan => 
    plan.gender === userGender || plan.gender === 'both'
  ) || workoutPlans[0]

  // Função para obter treinos customizados ou padrão
  const getAvailableWorkouts = () => {
    // Tentar carregar treinos customizados
    const customWorkouts = JSON.parse(localStorage.getItem(`custom_workouts_${userGender}`) || '{}')
    const savedDivision = localStorage.getItem(`division_${userGender}`) as 'AB' | 'ABC' | 'ABCD'
    
    const workouts: { [key: string]: any } = {}
    
    if (Object.keys(customWorkouts).length > 0) {
      // Usar treinos customizados
      const divisions = {
        'AB': ['A', 'B'],
        'ABC': ['A', 'B', 'C'],
        'ABCD': ['A', 'B', 'C', 'D']
      }
      
      const availableLetters = divisions[savedDivision || 'AB']
      
      availableLetters.forEach(letter => {
        if (customWorkouts[letter]) {
          const commonNames = {
            'A': userGender === 'male' ? 'Peito, Ombros e Tríceps' : 'Glúteos, Pernas e Core',
            'B': userGender === 'male' ? 'Costas, Pernas e Bíceps' : 'Peito, Costas e Braços',
            'C': 'Pernas Completo',
            'D': 'Braços e Ombros'
          }
          
          workouts[letter] = {
            name: `Treino ${letter} - ${commonNames[letter as keyof typeof commonNames]}`,
            exercises: customWorkouts[letter],
            focusArea: commonNames[letter as keyof typeof commonNames],
            duration: '45-60 minutos'
          }
        }
      })
    } else {
      // Usar treinos padrão
      const schedule = userWorkoutPlan.schedule
      Object.values(schedule).forEach(day => {
        if (day.exercises.length > 0 && !day.name.includes('Descanso') && !day.name.includes('Cardio')) {
          const match = day.name.match(/Treino ([A-D])/)
          if (match) {
            const workoutType = match[1]
            if (!workouts[workoutType]) {
              workouts[workoutType] = day
            }
          }
        }
      })
    }
    
    return workouts
  }

  const availableWorkouts = getAvailableWorkouts()
  const selectedWorkout = availableWorkouts[selectedWorkoutType]
  
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
                    💪
                  </div>
                </div>
              </div>
              
              {/* Seletor de Treino */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-ios-gray-700 mb-2 block">
                    Escolha seu treino de hoje:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedWorkoutType}
                      onChange={(e) => setSelectedWorkoutType(e.target.value as 'A' | 'B' | 'C' | 'D')}
                      className="w-full ios-input appearance-none pr-10 py-3 text-base font-medium"
                    >
                      {Object.keys(availableWorkouts).map((workoutType) => (
                        <option key={workoutType} value={workoutType}>
                          Treino {workoutType} - {availableWorkouts[workoutType].name.replace(`Treino ${workoutType} - `, '')}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ios-gray-400 pointer-events-none" />
                  </div>
                </div>

                {selectedWorkout && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-ios-blue" />
                      <span className="font-medium text-ios-gray-900">
                        {selectedWorkout.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-ios-gray-500" />
                      <span className="text-ios-gray-600">
                        {selectedWorkout.duration}
                      </span>
                    </div>
                    <div className="bg-ios-gray-50 rounded-ios p-3">
                      <p className="text-sm text-ios-gray-700">
                        <strong>Foco:</strong> {selectedWorkout.focusArea}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Treino selecionado */}
            {selectedWorkout && (
              <WorkoutDay 
                workout={selectedWorkout}
                userGender={userGender}
              />
            )}

            {/* Estatísticas rápidas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="ios-card text-center">
                <div className="text-2xl font-bold text-ios-blue mb-1">
                  {Object.keys(availableWorkouts).length}
                </div>
                <div className="text-sm text-ios-gray-600">Treinos</div>
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
        return <CustomizablePlan userGender={userGender} />
      
      case 'progress':
        return <ProgressTab userGender={userGender} />
      
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