'use client'

import { User, LogOut, Settings, Target, Heart, Calendar, Award } from 'lucide-react'

interface UserProfileProps {
  user: string
  onLogout: () => void
}

export default function UserProfile({ user, onLogout }: UserProfileProps) {
  const userGender = user === 'marido' ? 'male' : 'female'
  const userName = user === 'marido' ? 'Marido' : 'Esposa'
  const userIcon = userGender === 'male' ? '💪' : '🏋️‍♀️'

  // Dados simulados para demonstração
  const userStats = {
    joinDate: 'Janeiro 2024',
    workoutsCompleted: 0,
    weekStreak: 0,
    favoriteExercise: userGender === 'male' ? 'Flexão de Braços' : 'Agachamento com Salto'
  }

  const goals = [
    { icon: '🎯', title: 'Perder Peso', description: 'Foco principal em queima de gordura', active: true },
    { icon: '💪', title: 'Ganhar Força', description: 'Desenvolvimento de força muscular', active: true },
    { icon: '❤️', title: 'Melhorar Condicionamento', description: 'Saúde cardiovascular', active: true },
    { icon: '🧘', title: 'Bem-estar Geral', description: 'Qualidade de vida e disposição', active: true }
  ]

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      onLogout()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header do Perfil */}
      <div className="ios-card text-center">
        <div className="w-20 h-20 bg-ios-blue rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
          {userIcon}
        </div>
        <h2 className="text-xl font-bold text-ios-gray-900 mb-2">
          Olá, {userName}!
        </h2>
        <p className="text-ios-gray-600 mb-4">
          Seu personal trainer digital está aqui para te ajudar
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="w-4 h-4 text-ios-gray-500" />
          <span className="text-sm text-ios-gray-500">
            Membro desde {userStats.joinDate}
          </span>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Suas Estatísticas
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-ios-blue mb-1">
              {userStats.workoutsCompleted}
            </div>
            <div className="text-sm text-ios-gray-600">Treinos Concluídos</div>
          </div>
          <div className="text-center p-3 bg-ios-gray-50 rounded-ios">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {userStats.weekStreak}
            </div>
            <div className="text-sm text-ios-gray-600">Semanas Consecutivas</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-ios">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Exercício Favorito:</span>
          </div>
          <p className="text-sm text-purple-700 mt-1">{userStats.favoriteExercise}</p>
        </div>
      </div>

      {/* Seus Objetivos */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Seus Objetivos
        </h3>
        <div className="space-y-3">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-ios-gray-50 rounded-ios">
              <span className="text-xl">{goal.icon}</span>
              <div className="flex-1">
                <h4 className="font-medium text-ios-gray-900">{goal.title}</h4>
                <p className="text-sm text-ios-gray-600">{goal.description}</p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações do Plano */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Seu Plano Atual
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ios-gray-900">Tipo:</span>
            <span className="text-sm text-ios-gray-700">
              {userGender === 'male' ? 'Divisão AB - Homens' : 'Divisão AB - Mulheres'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ios-gray-900">Foco:</span>
            <span className="text-sm text-ios-gray-700">Perda de peso</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ios-gray-900">Frequência:</span>
            <span className="text-sm text-ios-gray-700">4x por semana</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ios-gray-900">Duração:</span>
            <span className="text-sm text-ios-gray-700">30-45 min/treino</span>
          </div>
        </div>
      </div>

      {/* Configurações */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-4">
          Configurações
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 bg-ios-gray-50 rounded-ios active:bg-ios-gray-100 transition-colors duration-150">
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-ios-gray-600" />
              <span className="font-medium text-ios-gray-900">Preferências</span>
            </div>
            <span className="text-ios-gray-400">Em breve</span>
          </button>
          
          <button className="w-full flex items-center justify-between p-3 bg-ios-gray-50 rounded-ios active:bg-ios-gray-100 transition-colors duration-150">
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-ios-gray-600" />
              <span className="font-medium text-ios-gray-900">Objetivos</span>
            </div>
            <span className="text-ios-gray-400">Em breve</span>
          </button>

          <button className="w-full flex items-center justify-between p-3 bg-ios-gray-50 rounded-ios active:bg-ios-gray-100 transition-colors duration-150">
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-ios-gray-600" />
              <span className="font-medium text-ios-gray-900">Saúde</span>
            </div>
            <span className="text-ios-gray-400">Em breve</span>
          </button>
        </div>
      </div>

      {/* Sobre o App */}
      <div className="ios-card">
        <h3 className="text-lg font-semibold text-ios-gray-900 mb-3">
          Sobre o Netfly Gym
        </h3>
        <p className="text-sm text-ios-gray-700 mb-3">
          Seu personal trainer digital focado em perda de peso com treinos personalizados 
          para cada pessoa. Desenvolvido com carinho para você e sua família.
        </p>
        <p className="text-xs text-ios-gray-500">
          Versão 1.0.0 • Criado com ❤️ para o seu bem-estar
        </p>
      </div>

      {/* Botão de Logout */}
      <button
        onClick={handleLogout}
        className="w-full ios-card flex items-center justify-center space-x-2 text-red-600 active:bg-red-50 transition-colors duration-150"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Sair do App</span>
      </button>
    </div>
  )
} 