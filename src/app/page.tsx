'use client'

import { useState, useEffect } from 'react'
import { User, Dumbbell, Heart, Calendar } from 'lucide-react'
import LoginForm from '@/components/LoginForm'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há um usuário logado no localStorage
    const savedUser = localStorage.getItem('netfly-gym-user')
    if (savedUser) {
      setCurrentUser(savedUser)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (username: string) => {
    setCurrentUser(username)
    localStorage.setItem('netfly-gym-user', username)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('netfly-gym-user')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-ios-blue border-t-transparent"></div>
      </div>
    )
  }

  if (!currentUser) {
    return <LoginForm onLogin={handleLogin} />
  }

  return <Dashboard user={currentUser} onLogout={handleLogout} />
} 