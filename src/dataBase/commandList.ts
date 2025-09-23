import type CommandProps from "../stores/Interface";

export const commandList: CommandProps[] = [
     { name: "dir", description: "Lista arquivos e pastas no diretório atual (Windows). Ex: dir C:\\Users" },
  { name: "ls", description: "Lista arquivos e pastas no diretório atual (Linux/macOS). Ex: ls -la" },
  { name: "cd", description: "Navega entre diretórios. Ex: cd /home/user" },
  { name: "pwd", description: "Mostra o diretório atual (Linux/macOS). Ex: pwd" },
  { name: "cls", description: "Limpa a tela do prompt (Windows). Ex: cls" },
  { name: "clear", description: "Limpa a tela do terminal (Linux/macOS). Ex: clear" },
  { name: "echo", description: "Exibe uma mensagem. Ex: echo Hello World" },
  { name: "copy", description: "Copia arquivos (Windows). Ex: copy file.txt D:\\Backup" },
  { name: "cp", description: "Copia arquivos (Linux/macOS). Ex: cp file.txt ~/Backup/" },
  { name: "move", description: "Move arquivos (Windows). Ex: move file.txt C:\\Temp" },
  { name: "mv", description: "Move ou renomeia arquivos (Linux/macOS). Ex: mv file.txt ~/Temp/" },
  { name: "del", description: "Apaga arquivos (Windows). Ex: del file.txt" },
  { name: "rm", description: "Remove arquivos (Linux/macOS). Ex: rm file.txt" },
  { name: "mkdir", description: "Cria um novo diretório. Ex: mkdir Projetos" },
  { name: "rmdir", description: "Remove diretório vazio. Ex: rmdir PastasAntigas" },
  { name: "ping", description: "Testa a conexão com um endereço. Ex: ping google.com" },
  { name: "ipconfig", description: "Exibe configurações de rede (Windows). Ex: ipconfig /all" },
  { name: "ifconfig", description: "Exibe configurações de rede (Linux/macOS). Ex: ifconfig" },
  { name: "tasklist", description: "Lista processos em execução (Windows). Ex: tasklist" },
  { name: "ps", description: "Lista processos em execução (Linux/macOS). Ex: ps aux" }
  ]
