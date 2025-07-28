'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, X, ExternalLink } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)

  // URLs de demonstração para exercícios comuns (podem ser expandidas)
  const getExerciseUrls = (exerciseName: string) => {
    const searchQueries = [
      `${exerciseName} exercício academia`,
      `${exerciseName} como fazer`,
      `${exerciseName} tutorial fitness`,
      `gym ${exerciseName} demonstration`
    ]
    
    return searchQueries.map(query => ({
      title: query,
      url: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`
    }))
  }

  const openImageModal = () => {
    setShowImageModal(true)
  }

  const closeModal = () => {
    setShowImageModal(false)
  }

  const exerciseUrls = getExerciseUrls(exercise.name)

  return (
    <>
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
            onClick={openImageModal}
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

      {/* Modal de Demonstração */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-ios max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                📸 Como fazer: {exercise.name}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            {/* Conteúdo do Modal */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💪</div>
                  <p className="text-gray-600">
                    Clique nos links abaixo para ver demonstrações visuais deste exercício:
                  </p>
                </div>

                {/* Lista de Links para Imagens */}
                <div className="space-y-3">
                  {exerciseUrls.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(item.url, '_blank')}
                      className="w-full p-4 bg-gradient-to-r from-ios-blue-50 to-ios-blue-100 hover:from-ios-blue-100 hover:to-ios-blue-200 rounded-ios border border-ios-blue-200 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-ios-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">Clique para ver imagens e vídeos</div>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-ios-blue-500 group-hover:text-ios-blue-600" />
                    </button>
                  ))}
                </div>

                {/* YouTube Search Button */}
                <div className="mt-6 p-4 bg-red-50 rounded-ios border border-red-200">
                  <h4 className="font-medium text-gray-900 mb-2">🎥 Vídeos Explicativos</h4>
                  <button
                    onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + ' como fazer exercício')}`, '_blank')}
                    className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-ios font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>📺</span>
                    Buscar no YouTube
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Footer do Modal */}
            <div className="p-4 border-t bg-gray-50 rounded-b-ios">
              <p className="text-sm text-gray-600 text-center">
                💡 <strong>Dica:</strong> Recomendamos assistir vídeos para entender melhor a execução correta
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 