import { create } from 'zustand'

interface AuthState {
  token: string | null
  user: { name: string; email: string } | null
  isAuthenticated: boolean
  login: (email: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  
  // Mock Login Fonksiyonu
  login: (email: string) => {
    // Gerçek uygulamada burada API'den token döner.
    // Şimdilik sahte bir token ve kullanıcı oluşturuyoruz.
    const mockToken = "mock-jwt-token-123456"
    set({ 
      token: mockToken, 
      user: { name: "Demo User", email }, 
      isAuthenticated: true 
    })
    
    // Kalıcılık için (Opsiyonel - sayfa yenilenince gitmesin diye)
    localStorage.setItem('auth-storage', mockToken)
  },

  logout: () => {
    set({ token: null, user: null, isAuthenticated: false })
    localStorage.removeItem('auth-storage')
  }
}))