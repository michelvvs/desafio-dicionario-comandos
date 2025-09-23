import { commandList } from '../dataBase/commandList'
import { useCommandStore } from '../stores/CommandStore'
import type CommandProps from '../stores/Interface'
import { useKeyPressStore } from '../stores/KeyPressStore'
import type { CommandInputProps } from './Interface'

export default function CommandInput({
  inputValue,
  callbackFunction
}: CommandInputProps) {
  const { changeCommand, clearCommand } = useCommandStore()
  const { changeKey } = useKeyPressStore()

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    changeKey(e.key)
    if (e.key === 'Enter') {
      e.preventDefault()
      if (inputValue) {
        const commandFound: CommandProps | undefined = commandList.find(
          (cmd) => cmd.name.toLowerCase() === inputValue.toLowerCase()
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

  function handleClear() {
    callbackFunction('')
    changeKey('Backspace')
  }
  return (
    <div className="flex gap-2 items-center">
      <input
        className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        type="text"
        value={inputValue}
        onChange={(e) => callbackFunction(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Digite algo e aperte Enter"
      />
      <button className="" onClick={() => handleClear()}>
        Limpar
      </button>
    </div>
  )
}
