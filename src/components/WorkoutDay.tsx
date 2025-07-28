'use client'

import { useState } from 'react'
import { Play, Clock, Target, ChevronDown, ChevronUp, Info } from 'lucide-react'
import { exercises } from '@/data/exercises'
import ExerciseCard from './ExerciseCard'

interface WorkoutDayProps {
  workout: {
    name: string
    exercises: string[]
    focusArea: string
    duration: string
  }
  userGender: 'male' | 'female'
}

export default function WorkoutDay({ workout, userGender }: WorkoutDayProps) {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null)
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false)

  // Filtrar exercícios do treino
  const workoutExercises = exercises.filter(exercise => 
    workout.exercises.includes(exercise.id) &&
    (exercise.gender === userGender || exercise.gender === 'both')
  )

  const totalExercises = workoutExercises.length
  const estimatedCalories = totalExercises * 25 // Estimativa simples

  const handleStartWorkout = () => {
    setIsWorkoutStarted(true)
  }

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId)
  }

  return (
    <div className="space-y-4">
      {/* Header do Treino */}
      <div className="ios-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-ios-gray-900">
            {workout.name}
          </h3>
          {!isWorkoutStarted && (
            <button
              onClick={handleStartWorkout}
              className="ios-button flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Iniciar</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-ios-gray-50 rounded-ios p-3">
            <div className="text-lg font-bold text-ios-blue">{totalExercises}</div>
            <div className="text-xs text-ios-gray-600">Exercícios</div>
          </div>
          <div className="bg-ios-gray-50 rounded-ios p-3">
            <div className="text-lg font-bold text-green-600">{estimatedCalories}</div>
            <div className="text-xs text-ios-gray-600">Cal. (est.)</div>
          </div>
          <div className="bg-ios-gray-50 rounded-ios p-3">
            <div className="text-lg font-bold text-orange-600">{workout.duration.split('-')[0]}</div>
            <div className="text-xs text-ios-gray-600">Minutos</div>
          </div>
        </div>

        {isWorkoutStarted && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-ios">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">
                Treino em andamento - Vamos lá! 💪
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lista de Exercícios */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-ios-gray-900 px-1">
          Exercícios do Treino
        </h4>
        
        {workoutExercises.map((exercise, index) => (
          <div key={exercise.id} className="ios-card">
            <button
              onClick={() => toggleExercise(exercise.id)}
              className="w-full flex items-center justify-between p-2 text-left active:bg-ios-gray-50 rounded-ios transition-colors duration-150"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-ios-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h5 className="font-semibold text-ios-gray-900">
                    {exercise.name}
                  </h5>
                  <p className="text-sm text-ios-gray-600">
                    {exercise.sets}x {exercise.reps} • {exercise.restTime}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exercise.difficulty === 'iniciante' 
                        ? 'bg-green-100 text-green-800'
                        : exercise.difficulty === 'intermediário'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              {expandedExercise === exercise.id ? (
                <ChevronUp className="w-5 h-5 text-ios-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-ios-gray-400" />
              )}
            </button>

            {/* Detalhes expandidos do exercício */}
            {expandedExercise === exercise.id && (
              <div className="mt-4 pt-4 border-t border-ios-gray-200">
                <ExerciseCard exercise={exercise} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dicas do Treino */}
      <div className="ios-card">
        <div className="flex items-center space-x-2 mb-3">
          <Info className="w-5 h-5 text-ios-blue" />
          <h4 className="font-semibold text-ios-gray-900">Dicas Importantes</h4>
        </div>
        <div className="space-y-2 text-sm text-ios-gray-700">
          <p>• Faça um aquecimento de 5-10 minutos antes de começar</p>
          <p>• Mantenha sempre a forma correta dos exercícios</p>
          <p>• Hidrate-se durante todo o treino</p>
          <p>• Respeite os intervalos de descanso entre séries</p>
          <p>• Alongue-se por 5-10 minutos ao final</p>
        </div>
      </div>
    </div>
  )
} 