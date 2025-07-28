'use client'

import { useState } from 'react'
import { User, Dumbbell } from 'lucide-react'

interface LoginFormProps {
  onLogin: (username: string) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [selectedUser, setSelectedUser] = useState<string>('')

  const users = [
    { id: 'marido', name: 'Marido', icon: '💪', gender: 'male' },
    { id: 'esposa', name: 'Esposa', icon: '🏋️‍♀️', gender: 'female' }
  ]

  const handleUserSelect = (userId: string) => {
    setSelectedUser(userId)
    // Auto login após seleção
    setTimeout(() => {
      onLogin(userId)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Dumbbell className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Netfly Gym</h1>
            <p className="text-blue-100">Seu personal trainer digital</p>
          </div>
        </div>

        {/* User Selection */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Quem vai treinar hoje?
          </h2>
          
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
              className={`w-full p-6 rounded-ios bg-white/10 backdrop-blur-md border border-white/20 
                         text-white transition-all duration-300 hover:bg-white/20 active:scale-95
                         ${selectedUser === user.id ? 'bg-white/25 scale-95' : ''}`}
            >
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl">{user.icon}</span>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-blue-100 text-sm">
                    Treinos personalizados para {user.gender === 'male' ? 'homens' : 'mulheres'}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="text-center">
          <p className="text-blue-100 text-sm">
            Treinos focados em perda de peso e qualidade de vida
          </p>
        </div>
      </div>
    </div>
  )
} 