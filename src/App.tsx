import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import CommandInput from './components/CommandInput'
import CommandView from './components/CommandView'
import ErrorMessage from './components/ErrorMessage'
import { useCommandStore } from './stores/CommandStore'
import { useKeyPressStore } from './stores/KeyPressStore'
import { isInvalidCommand } from './utils/validation'
import Footer from './components/Footer'

function App() {
  const [value, setValue] = useState('')

  const { command } = useCommandStore()
  const { key } = useKeyPressStore()

  return (
    <>
      <h1 className="font-extrabold mb-4">Dicionário de Comandos</h1>
      <Box>
        <p className="mb-2">Digite o comando a pesquisar:</p>
        <CommandInput inputValue={value} callbackFunction={setValue} />
        {command && <CommandView />}
        {!command && key === 'Enter' && (
          <ErrorMessage message="Comando não encontrado" />
        )}

        {isInvalidCommand(value) && <ErrorMessage message="Comando inválido" />}
      </Box>
      <Footer />
    </>
  )
}

export default App
