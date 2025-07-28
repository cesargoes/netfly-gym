'use client'

import { useState } from 'react'
import { Target, Clock, AlertCircle, Play } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)
  const [gifLoaded, setGifLoaded] = useState(false)

  return (
    <div className="space-y-4">
      {/* GIF do Exercício */}
      <div className="relative bg-ios-gray-100 rounded-ios overflow-hidden">
        <div className="aspect-video flex items-center justify-center">
          {!gifLoaded && (
            <div className="flex flex-col items-center space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-ios-blue border-t-transparent"></div>
              <span className="text-sm text-ios-gray-600">Carregando demonstração...</span>
            </div>
          )}
          <img
            src={exercise.gifUrl}
            alt={`Demonstração do exercício ${exercise.name}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              gifLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setGifLoaded(true)}
            onError={() => setGifLoaded(true)}
          />
          {gifLoaded && (
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
              GIF
            </div>
          )}
        </div>
      </div>

      {/* Músculos Trabalhados */}
      <div className="flex items-center space-x-2">
        <Target className="w-4 h-4 text-ios-blue" />
        <span className="text-sm font-medium text-ios-gray-900">Músculos:</span>
        <span className="text-sm text-ios-gray-700">
          {exercise.targetMuscles.join(', ')}
        </span>
      </div>

      {/* Séries e Repetições */}
      <div className="grid grid-cols-3 gap-4 p-3 bg-ios-gray-50 rounded-ios">
        <div className="text-center">
          <div className="text-lg font-bold text-ios-blue">{exercise.sets}</div>
          <div className="text-xs text-ios-gray-600">Séries</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">{exercise.reps}</div>
          <div className="text-xs text-ios-gray-600">Repetições</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-600">{exercise.restTime}</div>
          <div className="text-xs text-ios-gray-600">Descanso</div>
        </div>
      </div>

      {/* Instruções */}
      <div>
        <h5 className="font-semibold text-ios-gray-900 mb-2">Como Executar:</h5>
        <ol className="space-y-2">
          {exercise.instructions.map((instruction, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-ios-gray-700">
              <span className="w-5 h-5 bg-ios-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Equipamentos */}
      {exercise.equipment.length > 0 && (
        <div>
          <h5 className="font-semibold text-ios-gray-900 mb-2">Equipamentos:</h5>
          <div className="flex flex-wrap gap-2">
            {exercise.equipment.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-ios-gray-100 text-ios-gray-800 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Dicas */}
      {exercise.tips.length > 0 && (
        <div>
          <button
            onClick={() => setShowTips(!showTips)}
            className="flex items-center space-x-2 text-ios-blue font-medium mb-2"
          >
            <AlertCircle className="w-4 h-4" />
            <span>Dicas Importantes</span>
          </button>
          
          {showTips && (
            <div className="space-y-1">
              {exercise.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm text-ios-gray-700">
                  <span className="text-ios-blue mt-1">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
} 