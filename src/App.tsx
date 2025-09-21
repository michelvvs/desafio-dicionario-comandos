
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState("");
  const [descriptionFound, setDescriptionFound] = useState("");

  const commandList = [
    { name: 'ls', description: 'lista o conteúdo de um diretório.' },
    { name: 'cd', description: 'altera o diretório de trabalho.' },
    { name: 'pwd', description: 'exibe o diretório atual de trabalho.' },
    { name: 'mkdir', description: 'cria um novo diretório.' },
    { name: 'rm', description: 'remove arquivos ou diretórios.' },
  ]

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setShowList(true);
    }

    if (e.key !== "Enter") {
      setShowList(false);
    }


  };

  useEffect(() => {
    if (value) {

      const commandFound = commandList.find(
        (cmd) => cmd.name.toLowerCase() === value.toLowerCase()
      );
      setDescriptionFound(commandFound ? commandFound.description : "não encontrado")
      return commandFound
    }
  }, [value])

  return (
    <>
      <div>

      </div>
      <h1>Dicionário de Comandos</h1>
      <div className="card">
        <p>
          Digite o comando a pesquisar:
        </p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          list={showList ? "commands" : undefined}
          placeholder="Digite algo e aperte Enter"
        />

        <datalist id="commands" >
          {commandList.map((command: any) => {
            return <option value={command.name} />
          })}

        </datalist>
        <div className='flex text-center justify-center'>
          <p>
            {descriptionFound}
          </p>
        </div>

      </div >
    </>
  )
}

export default App
