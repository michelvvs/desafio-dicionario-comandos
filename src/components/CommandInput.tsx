import { useState } from 'react'
import { commandList } from '../dataBase/commandList'
import { useCommandStore } from '../stores/CommandStore'
import type CommandProps from '../stores/Interface'

export default function CommandInput() {
  const [value, setValue] = useState('')

  const { changeCommand, clearCommand } = useCommandStore()
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (value) {
        const commandFound: CommandProps | undefined = commandList.find(
          (cmd) => cmd.name.toLowerCase() === value.toLowerCase()
        )
        if (commandFound)
          changeCommand({
            name: commandFound.name,
            description: commandFound.description
          })
        if (!commandFound) clearCommand()
      }
    }
  }
  return (
    <input
      className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleEnter}
      placeholder="Digite algo e aperte Enter"
    />
  )
}
