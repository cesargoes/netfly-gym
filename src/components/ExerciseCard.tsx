'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, X, Loader2, Search } from 'lucide-react'
import type { Exercise } from '@/data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
}

interface ExerciseImage {
  id: string
  webformatURL: string
  largeImageURL: string
  tags: string
  user: string
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [showTips, setShowTips] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [images, setImages] = useState<ExerciseImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const searchExerciseImages = async () => {
    setLoading(true)
    setError(false)
    setShowImageModal(true)
    setImages([])

    try {
      // Primeiro tenta busca específica do exercício
      const searchTerms = [
        `${exercise.name} gym workout`,
        `${exercise.name} exercise fitness`,
        'gym exercise workout fitness',
        'fitness training muscle workout'
      ]

      let allImages: ExerciseImage[] = []

      for (const term of searchTerms) {
        try {
          // Usando Pixabay API (pública, sem necessidade de chave para uso básico)
          const response = await fetch(
            `https://pixabay.com/api/?key=9656065-a4094594c02604d9e0fc98e1f&q=${encodeURIComponent(term)}&image_type=photo&orientation=all&category=sports&min_width=400&per_page=6&safesearch=true`
          )
          
          if (response.ok) {
            const data = await response.json()
            if (data.hits && data.hits.length > 0) {
              allImages = [...allImages, ...data.hits.slice(0, 6)]
            }
          }
        } catch (err) {
          console.log(`Erro na busca por: ${term}`, err)
        }
      }

      // Se não encontrou imagens, usa imagens de placeholder relacionadas a fitness
      if (allImages.length === 0) {
        // Placeholder images para exercícios
        const placeholderImages = [
          {
            id: '1',
            webformatURL: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
            tags: 'gym equipment fitness',
            user: 'Unsplash'
          },
          {
            id: '2',
            webformatURL: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
            tags: 'gym workout training',
            user: 'Unsplash'
          },
          {
            id: '3',
            webformatURL: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
            tags: 'fitness gym exercise',
            user: 'Unsplash'
          },
          {
            id: '4',
            webformatURL: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=600&fit=crop',
            tags: 'gym equipment weight',
            user: 'Unsplash'
          },
          {
            id: '5',
            webformatURL: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
            tags: 'workout fitness gym',
            user: 'Unsplash'
          },
          {
            id: '6',
            webformatURL: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop',
            largeImageURL: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=600&fit=crop',
            tags: 'gym training muscle',
            user: 'Unsplash'
          }
        ]
        allImages = placeholderImages
      }

      // Remove duplicatas e limita a 9 imagens
      const uniqueImages = allImages
        .filter((img, index, self) => 
          index === self.findIndex(i => i.webformatURL === img.webformatURL)
        )
        .slice(0, 9)

      setImages(uniqueImages)
    } catch (err) {
      console.error('Erro ao buscar imagens:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    setShowImageModal(false)
    setImages([])
    setError(false)
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
            onClick={searchExerciseImages}
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

      {/* Modal com Imagens Incorporadas */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-ios max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Search size={20} className="text-ios-blue-500" />
                Como fazer: {exercise.name}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            {/* Conteúdo do Modal */}
            <div className="flex-1 p-4 overflow-y-auto">
              {loading && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="animate-spin text-ios-blue-500 mb-4" size={48} />
                  <p className="text-gray-600">Buscando imagens do exercício...</p>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">😔</div>
                  <p className="text-gray-600 mb-2">Não foi possível carregar as imagens</p>
                  <p className="text-sm text-gray-500">Tente novamente em alguns segundos</p>
                </div>
              )}

              {!loading && !error && images.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    💪 <strong>Imagens relacionadas ao exercício:</strong> Clique para ampliar
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image) => (
                      <div key={image.id} className="relative group cursor-pointer">
                        <img
                          src={image.webformatURL}
                          alt={`${exercise.name} - ${image.tags}`}
                          className="w-full h-48 object-cover rounded-ios shadow-sm hover:shadow-lg transition-all group-hover:scale-105"
                          onClick={() => window.open(image.largeImageURL, '_blank')}
                          onError={(e) => {
                            // Fallback se a imagem não carregar
                            const target = e.target as HTMLImageElement
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjxlbT5FeGVyY8OtY2lvIHt9PC9lbT48L3RleHQ+PC9zdmc+'
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-xs p-2 rounded-b-ios opacity-0 group-hover:opacity-100 transition-opacity">
                          📷 Por: {image.user}
                        </div>
                        <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Search size={12} className="text-gray-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer do Modal */}
            <div className="p-4 border-t bg-gray-50 rounded-b-ios">
              <p className="text-sm text-gray-600 text-center">
                💡 <strong>Dica:</strong> As imagens são referências visuais para te ajudar com o exercício
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 