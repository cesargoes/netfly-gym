'use client'

import { useState, useEffect } from 'react'
import { Target, Clock, BarChart3, Edit3, Plus, Minus, Save, Settings, ChevronDown, X } from 'lucide-react'
import { exercises, workoutPlans, type Exercise, type WorkoutPlan } from '@/data/exercises'

interface CustomizablePlanProps {
  userGender: 'male' | 'female'
}

export default function CustomizablePlan({ userGender }: CustomizablePlanProps) {
  const [currentDivision, setCurrentDivision] = useState<'AB' | 'ABC' | 'ABCD'>('AB')
  const [customWorkouts, setCustomWorkouts] = useState<{ [key: string]: string[] }>({})
  const [editingWorkout, setEditingWorkout] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  
  // Carregará configurações do localStorage
  useEffect(() => {
    const savedDivision = localStorage.getItem(`division_${userGender}`) as 'AB' | 'ABC' | 'ABCD'
    const savedWorkouts = JSON.parse(localStorage.getItem(`custom_workouts_${userGender}`) || '{}')
    
    if (savedDivision) {
      setCurrentDivision(savedDivision)
    }
    
    if (Object.keys(savedWorkouts).length > 0) {
      setCustomWorkouts(savedWorkouts)
    } else {
      // Inicializar com o plano padrão
      const defaultPlan = workoutPlans.find(plan => plan.gender === userGender || plan.gender === 'both')
      if (defaultPlan) {
        const defaultWorkouts: { [key: string]: string[] } = {}
        Object.values(defaultPlan.schedule).forEach(day => {
          const match = day.name.match(/Treino ([A-D])/)
          if (match && day.exercises.length > 0) {
            const workoutType = match[1]
            defaultWorkouts[workoutType] = day.exercises
          }
        })
        setCustomWorkouts(defaultWorkouts)
      }
    }
  }, [userGender])

  const saveConfiguration = () => {
    localStorage.setItem(`division_${userGender}`, currentDivision)
    localStorage.setItem(`custom_workouts_${userGender}`, JSON.stringify(customWorkouts))
    setIsEditing(false)
    setEditingWorkout(null)
  }

  const addExerciseToWorkout = (workoutType: string, exerciseId: string) => {
    setCustomWorkouts(prev => ({
      ...prev,
      [workoutType]: [...(prev[workoutType] || []), exerciseId]
    }))
  }

  const removeExerciseFromWorkout = (workoutType: string, exerciseId: string) => {
    setCustomWorkouts(prev => ({
      ...prev,
      [workoutType]: (prev[workoutType] || []).filter(id => id !== exerciseId)
    }))
  }

  const getAvailableExercises = (workoutType: string) => {
    const currentExercises = customWorkouts[workoutType] || []
    return exercises.filter(exercise => 
      !currentExercises.includes(exercise.id) &&
      (exercise.gender === userGender || exercise.gender === 'both')
    )
  }

  const getWorkoutExercises = (workoutType: string) => {
    const exerciseIds = customWorkouts[workoutType] || []
    return exerciseIds.map(id => exercises.find(ex => ex.id === id)).filter(Boolean) as Exercise[]
  }

  const getWorkoutLetters = () => {
    switch (currentDivision) {
      case 'AB': return ['A', 'B']
      case 'ABC': return ['A', 'B', 'C']
      case 'ABCD': return ['A', 'B', 'C', 'D']
    }
  }

  const getWorkoutName = (letter: string) => {
    const commonNames = {
      'A': userGender === 'male' ? 'Peito, Ombros e Tríceps' : 'Glúteos, Pernas e Core',
      'B': userGender === 'male' ? 'Costas, Pernas e Bíceps' : 'Peito, Costas e Braços',
      'C': 'Pernas Completo',
      'D': 'Braços e Ombros'
    }
    return commonNames[letter as keyof typeof commonNames] || `Treino ${letter}`
  }

  return (
    <div className="space-y-6">
      {/* Header com configurações */}
      <div className="ios-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-ios-gray-900">
            Plano Personalizado 🎯
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-ios transition-colors ${
              isEditing 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-ios-blue text-white hover:bg-ios-blue/90'
            }`}
          >
            {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
            <span>{isEditing ? 'Cancelar' : 'Editar'}</span>
          </button>
        </div>

        {/* Seletor de divisão */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-ios-gray-700 mb-2 block">
              Divisão de Treino:
            </label>
            <div className="flex space-x-2">
              {(['AB', 'ABC', 'ABCD'] as const).map((division) => (
                <button
                  key={division}
                  onClick={() => isEditing && setCurrentDivision(division)}
                  disabled={!isEditing}
                  className={`px-4 py-2 rounded-ios text-sm font-medium transition-colors ${
                    currentDivision === division
                      ? 'bg-ios-blue text-white'
                      : 'bg-ios-gray-100 text-ios-gray-700 hover:bg-ios-gray-200'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                >
                  {division}
                </button>
              ))}
            </div>
          </div>

          {isEditing && (
            <button
              onClick={saveConfiguration}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-ios font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Configurações</span>
            </button>
          )}
        </div>
      </div>

      {/* Treinos customizáveis */}
      <div className="space-y-4">
        {getWorkoutLetters().map((workoutLetter) => {
          const workoutExercises = getWorkoutExercises(workoutLetter)
          const availableExercises = getAvailableExercises(workoutLetter)
          const isCurrentlyEditing = editingWorkout === workoutLetter

          return (
            <div key={workoutLetter} className="ios-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-ios-gray-900">
                    Treino {workoutLetter}
                  </h3>
                  <p className="text-sm text-ios-gray-600">
                    {getWorkoutName(workoutLetter)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-ios-gray-500">
                    {workoutExercises.length} exercícios
                  </span>
                  {isEditing && (
                    <button
                      onClick={() => setEditingWorkout(isCurrentlyEditing ? null : workoutLetter)}
                      className="p-2 text-ios-blue hover:bg-ios-blue/10 rounded-ios transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Lista de exercícios */}
              <div className="space-y-2">
                {workoutExercises.map((exercise, index) => (
                  <div key={exercise.id} className="flex items-center justify-between p-3 bg-ios-gray-50 rounded-ios">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-ios-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-ios-gray-900">{exercise.name}</h4>
                        <p className="text-sm text-ios-gray-600">
                          {exercise.sets}x {exercise.reps} • {exercise.restTime}
                        </p>
                      </div>
                    </div>
                    
                    {isCurrentlyEditing && (
                      <button
                        onClick={() => removeExerciseFromWorkout(workoutLetter, exercise.id)}
                        className="p-1 text-red-500 hover:bg-red-100 rounded-ios transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Adicionar exercício */}
              {isCurrentlyEditing && availableExercises.length > 0 && (
                <div className="mt-4 p-4 border-2 border-dashed border-ios-gray-300 rounded-ios">
                  <h4 className="font-medium text-ios-gray-900 mb-3">
                    Adicionar Exercício:
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {availableExercises.slice(0, 10).map((exercise) => (
                      <button
                        key={exercise.id}
                        onClick={() => addExerciseToWorkout(workoutLetter, exercise.id)}
                        className="w-full flex items-center justify-between p-2 text-left hover:bg-ios-gray-100 rounded-ios transition-colors"
                      >
                        <div>
                          <div className="font-medium text-ios-gray-900">{exercise.name}</div>
                          <div className="text-sm text-ios-gray-600">
                            {exercise.targetMuscles.slice(0, 2).join(', ')}
                          </div>
                        </div>
                        <Plus className="w-4 h-4 text-green-500" />
                      </button>
                    ))}
                  </div>
                  {availableExercises.length > 10 && (
                    <p className="text-xs text-ios-gray-500 mt-2 text-center">
                      E mais {availableExercises.length - 10} exercícios...
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Estatísticas */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Estatísticas do Plano
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-ios-blue mb-1">
              {getWorkoutLetters().length}
            </div>
            <div className="text-sm text-ios-gray-600">Tipos de treino</div>
          </div>
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {Object.values(customWorkouts).reduce((total, exercises) => total + exercises.length, 0)}
            </div>
            <div className="text-sm text-ios-gray-600">Total exercícios</div>
          </div>
        </div>
      </div>

      {/* Dicas */}
      <div className="ios-card">
        <div className="flex items-center space-x-2 mb-3">
          <Settings className="w-5 h-5 text-ios-blue" />
          <h3 className="text-lg font-semibold text-ios-gray-900">
            Como Personalizar
          </h3>
        </div>
        <div className="space-y-2 text-sm text-ios-gray-700">
          <p>• <strong>AB:</strong> Ideal para iniciantes (2 treinos alternados)</p>
          <p>• <strong>ABC:</strong> Intermediário (3 treinos por ciclo)</p>
          <p>• <strong>ABCD:</strong> Avançado (4 treinos específicos)</p>
          <p>• Clique em <strong>"Editar"</strong> para personalizar seus treinos</p>
          <p>• Adicione/remova exercícios conforme sua preferência</p>
          <p>• Suas configurações são salvas automaticamente</p>
        </div>
      </div>
    </div>
  )
} 