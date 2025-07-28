'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, X, Loader2, ExternalLink, RefreshCw } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0)
  const [iframeError, setIframeError] = useState(false)
  const [loading, setLoading] = useState(false)

  // Diferentes tipos de busca para tentar
  const searchQueries = [
    `${exercise.name} exercício academia`,
    `${exercise.name} como fazer tutorial`,
    `${exercise.name} gym exercise demonstration`,
    `${exercise.name} fitness workout tutorial`,
    `how to do ${exercise.name} exercise`,
    `${exercise.name} form technique gym`
  ]

  const openImageModal = () => {
    setShowImageModal(true)
    setIframeError(false)
    setLoading(true)
    setCurrentSearchIndex(0)
  }

  const closeModal = () => {
    setShowImageModal(false)
    setIframeError(false)
    setLoading(false)
  }

  const tryNextSearch = () => {
    if (currentSearchIndex < searchQueries.length - 1) {
      setCurrentSearchIndex(currentSearchIndex + 1)
      setIframeError(false)
      setLoading(true)
    }
  }

  const getCurrentUrl = () => {
    const query = searchQueries[currentSearchIndex]
    return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}&igu=1`
  }

  const handleIframeLoad = () => {
    setLoading(false)
  }

  const handleIframeError = () => {
    setLoading(false)
    setIframeError(true)
  }

  // Função para abrir em nova aba como fallback
  const openInNewTab = () => {
    window.open(getCurrentUrl(), '_blank')
    closeModal()
  }

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

      {/* Modal com Google Images Iframe */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-ios max-w-6xl w-full max-h-[95vh] flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  🔍 Imagens: {exercise.name}
                </h3>
                <div className="text-sm text-gray-500">
                  Busca {currentSearchIndex + 1} de {searchQueries.length}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Botão Tentar Próxima Busca */}
                {(iframeError || currentSearchIndex < searchQueries.length - 1) && (
                  <button
                    onClick={tryNextSearch}
                    disabled={currentSearchIndex >= searchQueries.length - 1}
                    className="px-3 py-1 bg-orange-500 text-white rounded-ios text-sm flex items-center gap-1 hover:bg-orange-600 disabled:bg-gray-300 transition-colors"
                  >
                    <RefreshCw size={14} />
                    Tentar Outra
                  </button>
                )}
                {/* Botão Abrir no Google */}
                <button
                  onClick={openInNewTab}
                  className="px-3 py-1 bg-blue-500 text-white rounded-ios text-sm flex items-center gap-1 hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={14} />
                  Abrir Google
                </button>
                {/* Botão Fechar */}
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            {/* Conteúdo do Modal */}
            <div className="flex-1 relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <Loader2 className="animate-spin text-ios-blue-500 mb-4 mx-auto" size={48} />
                    <p className="text-gray-600">Tentando carregar Google Images...</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Busca atual: "{searchQueries[currentSearchIndex]}"
                    </p>
                  </div>
                </div>
              )}

              {iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">🚫</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Google Images bloqueou o acesso
                    </h4>
                    <p className="text-gray-600 mb-4">
                      O Google não permite mostrar suas imagens dentro de outros sites.
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={tryNextSearch}
                        disabled={currentSearchIndex >= searchQueries.length - 1}
                        className="block w-full px-4 py-2 bg-orange-500 text-white rounded-ios hover:bg-orange-600 disabled:bg-gray-300 transition-colors"
                      >
                        Tentar Busca Diferente
                      </button>
                      <button
                        onClick={openInNewTab}
                        className="block w-full px-4 py-2 bg-blue-500 text-white rounded-ios hover:bg-blue-600 transition-colors"
                      >
                        Abrir Google Images em Nova Aba
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Iframe do Google Images */}
              <iframe
                key={currentSearchIndex} // Força re-render quando muda busca
                src={getCurrentUrl()}
                className="w-full h-full border-0"
                title={`Google Images - ${exercise.name}`}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms"
                referrerPolicy="no-referrer"
                style={{ minHeight: '500px' }}
              />
            </div>
            
            {/* Footer do Modal */}
            <div className="p-3 border-t bg-gray-50 rounded-b-ios">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>
                  💡 <strong>Dica:</strong> Se não carregar, clique em "Abrir Google" ou "Tentar Outra"
                </div>
                <div className="text-xs">
                  Buscando por: "{searchQueries[currentSearchIndex]}"
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 