# To-do de desenvolvimento

Marque cada item concluído com [x]. O agente pode reescrever este arquivo para atualizar o progresso.

- [x] Ler ./versoes/agent-ia4/prompt/programas.md.
- [x] Ler e utilizar ./versoes/agent-ia4/projetos/calculadora/calculadora.js usando Run, Stdin e Encerrar.
- [x] Criar um programa em ./versoes/agent-ia4/projetos/ dentro de uma pasta, seguindo o modelo da calculadora.
- [x] Rodar o programa criado e verificar se a saída corresponde ao esperado.
- [x] Revisar programas.md, detalhando o uso de Run, Stdin e Encerrar e orientando a criação e o teste de novos programas.
- [x] Criar ./versoes/agent-ia4/prompt/comandos.md com um roteiro de testes para todos os comandos.
- [x] Executar os testes dos comandos, usando a calculadora quando necessário.
- [x] Registrar em comandos.md os resultados reais dos testes, incluindo falhas e comportamentos inesperados.
- [ ] Revisar o prompt principal e adicionar programas.md e comandos.md como referências para futuras consultas.
- [x] Atualizar este notas.md conforme cada etapa for concluída.

## Resultados importantes

- A calculadora está em ./versoes/agent-ia4/projetos/calculadora/calculadora.js.
- O caminho correto para executá-la neste ambiente é ./versoes/agent-ia4/projetos/calculadora/calculadora.js.
- Run deve ser executado e sua saída observada antes de qualquer Stdin.
- Depois de cada Stdin, a saída deve ser observada antes do próximo Stdin.
- Encerrar deve ser usado somente depois de terminar as operações e observar suas saídas.
- Stdin vazio não deve ser usado automaticamente.
- A operação 125 + 37 retornou 162.
- A operação 100 - 43 retornou 57.
- Foi criado ./versoes/agent-ia4/projetos/geradorSenha/geradorSenha.js.
- O gerador produziu uma senha de 12 caracteres.
- As entradas 3 e 101 foram rejeitadas corretamente.
- O processo do gerador de senha foi encerrado após os testes.
- Stat retornou tamanho, indicação de arquivo e diretório, além das datas de criação e modificação.
- Join combinou o diretório e o nome do arquivo em um caminho.
- Absolute retornou o caminho absoluto do arquivo.
- Dirname retornou o diretório do arquivo.
- Basename retornou o nome do arquivo.
- Extension retornou .txt.
- CriarJson criou o arquivo dados.json quando os dois parâmetros foram passados entre aspas duplas.
- LerJson retornou {nome:teste,valor:42}, sem preservar as aspas do JSON na saída observada.