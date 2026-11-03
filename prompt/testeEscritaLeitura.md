aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
