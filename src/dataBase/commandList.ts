import type CommandProps from "../stores/Interface";

export const commandList: CommandProps[] = [
    { name: 'ls', description: 'lista o conteúdo de um diretório.' },
    { name: 'cd', description: 'altera o diretório de trabalho.' },
    { name: 'pwd', description: 'exibe o diretório atual de trabalho.' },
    { name: 'mkdir', description: 'cria um novo diretório.' },
    { name: 'rm', description: 'remove arquivos ou diretórios.' }
  ]
