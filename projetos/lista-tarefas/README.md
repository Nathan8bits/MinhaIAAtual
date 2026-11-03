# Lista de Tarefas

Pequeno projeto Node.js para gerenciar uma lista de tarefas pelo terminal.

## Como executar

1. Certifique-se de ter o Node.js instalado
2. Navegue até a pasta do projeto:
   ```bash
   cd versoes/agent-ia5/projetos/lista-tarefas
   ```
3. Execute o programa:
   ```bash
   node index.js
   ```

## Como usar

O programa apresenta um menu com 4 opções:

1. **Adicionar tarefa** - Digite a descrição da tarefa e pressione Enter
2. **Listar tarefas** - Mostra todas as tarefas cadastradas com numeração
3. **Remover tarefa** - Digite o número da tarefa que deseja remover
4. **Sair** - Encerra o programa

## Exemplo de uso

```
=== LISTA DE TAREFAS ===
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Sair
Escolha uma opção: 1
Digite a tarefa: Estudar Node.js
Tarefa adicionada com sucesso!

=== LISTA DE TAREFAS ===
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Sair
Escolha uma opção: 1
Digite a tarefa: Fazer exercícios
Tarefa adicionada com sucesso!

=== LISTA DE TAREFAS ===
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Sair
Escolha uma opção: 2

--- SUAS TAREFAS ---
1. Estudar Node.js
2. Fazer exercícios
```

## Observações

- As tarefas são mantidas em memória (perdem-se ao fechar o programa)
- O programa roda inteiramente no terminal
- Não requer dependências externas