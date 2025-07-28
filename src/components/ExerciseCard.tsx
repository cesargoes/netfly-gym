'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)

  // URL para busca no Google Imagens
  const openGoogleImages = () => {
    const searchQuery = `${exercise.name} exercício academia como fazer`
    const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`
    window.open(googleImagesUrl, '_blank')
  }

  return (
    <div className="ios-card p-4 mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-ios-blue-600">{exercise.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-1 rounded-full ${
              exercise.difficulty === 'iniciante' ? 'bg-green-100 text-green-600' :
              exercise.difficulty === 'intermediário' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {exercise.difficulty}
            </span>
            <span className="text-xs text-gray-500">
              {exercise.sets} séries • {exercise.reps} reps
            </span>
          </div>
        </div>
        
        {/* Botão Ver Exercício */}
        <button
          onClick={openGoogleImages}
          className="ml-3 px-3 py-2 bg-ios-blue-500 text-white rounded-ios text-sm font-medium flex items-center gap-2 hover:bg-ios-blue-600 transition-colors shadow-sm"
        >
          <span className="text-base">👁️</span>
          Ver Exercício
        </button>
      </div>

      {/* Músculos trabalhados */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Músculos trabalhados:</h4>
        <div className="flex flex-wrap gap-1">
          {exercise.targetMuscles.map((muscle, index) => (
            <span key={index} className="text-xs bg-ios-blue-50 text-ios-blue-700 px-2 py-1 rounded-full">
              {muscle}
            </span>
          ))}
        </div>
      </div>

      {/* Sets, Reps, Rest */}
      <div className="grid grid-cols-3 gap-4 mb-3 text-center">
        <div className="bg-gray-50 rounded-ios p-2">
          <div className="text-lg font-bold text-ios-blue-600">{exercise.sets}</div>
          <div className="text-xs text-gray-600">Séries</div>
        </div>
        <div className="bg-gray-50 rounded-ios p-2">
          <div className="text-lg font-bold text-ios-blue-600">{exercise.reps}</div>
          <div className="text-xs text-gray-600">Repetições</div>
        </div>
        <div className="bg-gray-50 rounded-ios p-2">
          <div className="text-lg font-bold text-ios-blue-600">{exercise.restTime}</div>
          <div className="text-xs text-gray-600">Descanso</div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Como executar:</h4>
        <ol className="text-sm text-gray-600 space-y-1">
          {exercise.instructions.map((instruction, index) => (
            <li key={index} className="flex">
              <span className="text-ios-blue-500 font-medium mr-2">{index + 1}.</span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Equipment */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Equipamentos:</h4>
        <div className="flex flex-wrap gap-1">
          {exercise.equipment.map((item, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div>
        <button
          onClick={() => setShowTips(!showTips)}
          className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-2"
        >
          <span>Dicas importantes</span>
          {showTips ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {showTips && (
          <ul className="text-sm text-gray-600 space-y-1">
            {exercise.tips.map((tip, index) => (
              <li key={index} className="flex">
                <span className="text-ios-blue-500 mr-2">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
} 