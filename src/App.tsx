import './App.css'
import Box from './components/Box'
import CommandInput from './components/CommandInput'
import NotFound from './components/NotFound'
import { useCommandStore } from './stores/CommandStore'

function App() {
  const { command } = useCommandStore()
  return (
    <>
      <h1 className="font-extrabold mb-4">Dicionário de Comandos</h1>
      <Box>
        <p>Digite o comando a pesquisar:</p>
        <CommandInput />
        {command && (
          <div className="flex text-center justify-center">
            <div>{command?.name}</div>
            <div>
              <p>{command?.description}</p>
            </div>
          </div>
        )}

        {!command && <NotFound />}
      </Box>
    </>
  )
}

export default App
