import { create } from 'zustand'

type State = {
  key: string
}

type Action = {
  changeKey: (key: string) => void
}

export const useKeyPressStore = create<State & Action>((set) => ({
  key: '',
  changeKey: (key: string) => set(() => ({ key: key }))
}))
