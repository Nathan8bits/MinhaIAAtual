# Programas de projetos

Os programas criados para os projetos da agente ficam dentro de:
./versoes/agent-ia4/projetos/

A calculadora é o modelo de referência para criação, execução e teste dos programas.

## Criando programas

Todo novo programa deve ser criado dentro de:
./versoes/agent-ia4/projetos/

Cada programa deve ficar dentro de sua própria pasta quando isso ajudar na organização. Exemplo:
./versoes/agent-ia4/projetos/calculadora/calculadora.js

O programa deve ser desenvolvido para receber entradas pelo processo quando for necessário interagir com ele usando Stdin.

## Executando programas

Use Run para iniciar o programa. Depois de executar Run, aguarde a saída inicial do processo antes de enviar qualquer Stdin.

Exemplo:
Run(node, ./versoes/agent-ia4/projetos/calculadora/calculadora.js);

Somente depois de receber a saída do Run, envie uma entrada com Stdin.

Stdin(25 + 17);

Depois de cada Stdin, aguarde a resposta do programa antes de enviar a próxima entrada. Isso permite observar o resultado e identificar erros ou comportamentos inesperados.

## Fluxo obrigatório de interação

1. Use Run para iniciar o programa.
2. Aguarde a saída inicial do processo.
3. Use Stdin para enviar uma entrada.
4. Aguarde a saída correspondente ao Stdin.
5. Se houver outra entrada, envie o próximo Stdin somente depois de observar a resposta anterior.
6. Quando terminar todos os testes ou operações, use Encerrar.

Não use Encerrar antes de receber as saídas que ainda precisam ser observadas.

Não use Stdin vazio automaticamente. Só use Stdin vazio quando a saída ou o comportamento do programa indicar que ele é necessário.

## Encerrando programas

Quando todas as operações ou testes terminarem e as respectivas saídas já tiverem sido observadas, encerre o processo com:
Encerrar();

## Exemplo completo

Run(node, ./versoes/agent-ia4/projetos/calculadora/calculadora.js);
Stdin(25 + 17);
Stdin(100 - 43);
Encerrar();

O agente deve observar a saída do Run antes do primeiro Stdin, observar a saída de cada Stdin antes do próximo e somente encerrar depois de concluir os testes.

## Testando novos programas

Ao criar um novo programa, siga o mesmo padrão da calculadora:

1. Crie o arquivo dentro de ./versoes/agent-ia4/projetos/.
2. Execute o programa com Run.
3. Aguarde e observe a saída inicial.
4. Envie entradas usando Stdin.
5. Aguarde e observe cada resposta.
6. Teste também entradas inválidas quando o programa possuir tratamento de erros.
7. Depois de terminar os testes, use Encerrar.
8. Registre em notas.md informações importantes descobertas durante o desenvolvimento ou teste.