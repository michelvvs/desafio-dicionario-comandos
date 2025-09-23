import { create } from 'zustand'
import type CommandProps from './Interface'

type State = {
  command: CommandProps | null
}

type Action = {
  changeCommand: (command: CommandProps) => void
  clearCommand: () => void
}

export const useCommandStore = create<State & Action>((set) => ({
  command: null,
  changeCommand: (command: CommandProps) => set(() => ({ command: command })),
  clearCommand: () => set({ command: null })
}))
