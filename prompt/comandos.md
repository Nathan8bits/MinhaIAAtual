# Comandos

Este arquivo é a referência permanente dos comandos disponíveis para a agente. Registra a função de cada comando, seus parâmetros, comportamentos observados e resultados reais dos testes.

## Arquivos e diretórios

- CriarDir: cria um diretório, incluindo diretórios-pai que não existirem. Teste confirmado com sucesso.
- Criar: cria ou sobrescreve um arquivo com o conteúdo informado. Teste confirmado com sucesso.
- Ler: lê o conteúdo de um arquivo. Teste confirmado, retornando o conteúdo criado.
- LerJson: lê um arquivo JSON e retorna seu conteúdo formatado. Teste realizado. A saída observada foi {nome:teste,valor:42}, sem preservar as aspas na saída.
- CriarJson: cria ou sobrescreve um arquivo JSON. Teste confirmado quando os dois parâmetros foram passados entre aspas duplas.
- Append: adiciona conteúdo ao final de um arquivo. Teste confirmado. Não adiciona quebra de linha automaticamente.
- Existe: verifica se um arquivo ou diretório existe. Teste confirmado: true para existente e false para inexistente.
- Deletar: remove um arquivo. Teste confirmado.
- Renomear: move ou renomeia um arquivo ou diretório. Teste confirmado.
- Copiar: copia um arquivo para outro caminho. Teste confirmado.
- DeletarDir: remove um diretório e seu conteúdo. Teste confirmado.
- ListarDir: lista os nomes dos itens de um diretório. Teste confirmado.
- ListarDirDetalhado: lista os itens de um diretório com informações de tipo. Teste confirmado.

## Informações de caminho

- Stat: retornou tamanho, indicação de arquivo e diretório, além das datas de criação e modificação.
- IsFile: confirmou arquivo.
- IsDir: confirmou diretório.
- Join: retornou versoes/agent-ia5/projetos/testesComandos/teste.txt.
- Absolute: retornou o caminho absoluto do arquivo.
- Dirname: retornou ./versoes/agent-ia5/projetos/testesComandos.
- Basename: retornou teste.txt.
- Extension: retornou .txt.

## Processos

- Run: iniciou a calculadora e produziu a saída inicial calculadora.
- Stdin: confirmou 125 + 37 = 162 e 100 - 43 = 57.
- Encerrar: retornou true e encerrou o processo.

## Observações

- A calculadora está em ./versoes/agent-ia5/projetos/calculadora/calculadora.js.
- Run seguido imediatamente de Stdin apresentou comportamento diferente: a primeira entrada não retornou o resultado esperado, enquanto a segunda foi processada normalmente.
- Run seguido de Stdin vazio e depois de uma operação permitiu que a operação retornasse 162.
- Stdin vazio não deve ser usado automaticamente.
- CriarJson funcionou quando os dois parâmetros foram passados entre aspas duplas.
- LerJson retornou {nome:teste,valor:42}, sem preservar as aspas do JSON na saída observada.
