// src/store/userStore.ts

import { create } from "zustand"
import { User } from "@/types/user"

interface UserState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean

  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  setUser: (user) =>
    set(() => ({
      user,
      isAuthenticated: !!user
    })),

  setLoading: (loading) =>
    set(() => ({ loading })),

  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false
    }))
}))