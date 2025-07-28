'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)

  return (
    <div className="ios-card p-4 mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-ios-blue-600">{exercise.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-1 rounded-full ${
              exercise.difficulty === 'iniciante' ? 'bg-green-100 text-green-600' :
              exercise.difficulty === 'intermediário' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {exercise.difficulty}
            </span>
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="font-medium">{exercise.sets} séries</div>
          <div>{exercise.reps} reps</div>
          <div>Descanso: {exercise.restTime}</div>
        </div>
      </div>

      {/* Target Muscles */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Músculos Trabalhados:</h4>
        <div className="flex flex-wrap gap-1">
          {exercise.targetMuscles.map((muscle, index) => (
            <span key={index} className="text-xs bg-ios-gray-100 text-ios-gray-700 px-2 py-1 rounded">
              {muscle}
            </span>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Equipamentos:</h4>
        <div className="flex flex-wrap gap-1">
          {exercise.equipment.map((item, index) => (
            <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Como Executar:</h4>
        <ol className="list-decimal list-inside space-y-1">
          {exercise.instructions.map((instruction, index) => (
            <li key={index} className="text-sm text-gray-600">{instruction}</li>
          ))}
        </ol>
      </div>

      {/* Tips Toggle */}
      <button
        onClick={() => setShowTips(!showTips)}
        className="flex items-center justify-between w-full p-2 bg-ios-gray-50 rounded-lg text-sm font-medium text-ios-blue-600"
      >
        <span>Dicas Importantes</span>
        {showTips ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Tips Content */}
      {showTips && (
        <div className="mt-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <ul className="space-y-1">
            {exercise.tips.map((tip, index) => (
              <li key={index} className="text-sm text-yellow-800 flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 