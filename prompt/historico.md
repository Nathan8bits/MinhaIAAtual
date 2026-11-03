
pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


Resposta do Pato: 
 Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');
console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.

Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');
console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
{
  "descricao": "Criar uma calculadora",
  "comandos": [
    {
      "nome": "CriarDir",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/"
      ]
    },
    {
      "nome": "Criar",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js",
        "console.log('calculadora');\nconsole.log(2 + 2);"
      ]
    },
    {
      "nome": "Ler",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js"
      ]
    }
  ]
}
Criar diretório ./agent-ia5/projetos/testeNovoParser/: Diretório criado com sucesso.  Criando ./agent-ia5/projetos/testeNovoParser/calculadora.js: Arquivo criado com sucesso.  Lendo ./agent-ia5/projetos/testeNovoParser/calculadora.js: console.log('calculadora');
console.log(2 + 2);  

pergunta:
    A ferramenta executou a ação. Retorno da ferramenta:
Criar diretório ./agent-ia5/projetos/testeNovoParser/: Diretório criado com sucesso.  Criando ./agent-ia5/projetos/testeNovoParser/calculadora.js: Arquivo criado com sucesso.  Lendo ./agent-ia5/projetos/testeNovoParser/calculadora.js: console.log('calculadora');
console.log(2 + 2);  . Analise o retorno e continue a tarefa caso seja necessário.
              .


Resposta do Pato: 
 Descrição: ; Comandos: PerguntaAnterior([1, 3]);Fim.

Descrição: ; Comandos: PerguntaAnterior([1, 3]);Fim.
{
  "descricao": "",
  "comandos": [
    {
      "nome": "PerguntaAnterior",
      "parametros": [
        "[1",
        "3]"
      ]
    }
  ]
}
ERRO em PerguntaAnterior: Cannot read properties of undefined (reading 'resposta')  

pergunta:
    A ferramenta executou a ação. Retorno da ferramenta:
ERRO em PerguntaAnterior: Cannot read properties of undefined (reading 'resposta')  . Analise o retorno e continue a tarefa caso seja necessário.
              .


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


Resposta do Pato: 
 Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.

Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
{
  "descricao": "Criar uma calculadora",
  "comandos": [
    {
      "nome": "CriarDir",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/"
      ]
    },
    {
      "nome": "Criar",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js",
        "console.log('calculadora');\n console.log(2 + 2);"
      ]
    },
    {
      "nome": "Ler",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js"
      ]
    }
  ]
}
Criar diretório ./agent-ia5/projetos/testeNovoParser/: Diretório criado com sucesso.  Criando ./agent-ia5/projetos/testeNovoParser/calculadora.js: Arquivo criado com sucesso.  Lendo ./agent-ia5/projetos/testeNovoParser/calculadora.js: console.log('calculadora');
 console.log(2 + 2);  

pergunta:
    A ferramenta executou a ação. Retorno da ferramenta:
Criar diretório ./agent-ia5/projetos/testeNovoParser/: Diretório criado com sucesso.  Criando ./agent-ia5/projetos/testeNovoParser/calculadora.js: Arquivo criado com sucesso.  Lendo ./agent-ia5/projetos/testeNovoParser/calculadora.js: console.log('calculadora');
 console.log(2 + 2);  . Analise o retorno e continue a tarefa caso seja necessário.
              .



Resposta do Pato: 
 


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


Resposta do Pato: 
 Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.

Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
{
  "descricao": "Criar uma calculadora",
  "comandos": [
    {
      "nome": "CriarDir",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/"
      ]
    },
    {
      "nome": "Criar",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js",
        "console.log('calculadora');\n console.log(2 + 2);"
      ]
    },
    {
      "nome": "Ler",
      "parametros": [
        "./agent-ia5/projetos/testeNovoParser/calculadora.js"
      ]
    }
  ]
}

pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.


pergunta:
  Lendo prompt:  aguarde a última mensagem que não tenha '^' e um número no final. Responda com 'OK - (número que aparece no início)' para cada mensagem que nao seja a última.

Caso algum trecho esteja faltando responda com o seguinte texto:
Descrição: ; Comandos: PerguntaAnterior([2, 3]);Fim. 
Com os parâmetros indicando os trechos faltantes ou sem parâmetros para reenviar toda a mensagem.

O '^' no começo ou no final indicam que a mensagem esta incompleta.

Cada trecho tem um número no começo, indicando sua posição, e um número no final que indica a próxima. Se faltar algum número ou não houver trecho sem '^' no final significa que a mensagem tem um trecho faltando.

Caso todos os trechos sejam enviados responda com o texto a seguir:
Descrição: Criar uma calculadora; Comandos: CriarDir("./agent-ia5/projetos/testeNovoParser/"); Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js", "console.log('calculadora');\n console.log(2 + 2);"); Ler("./agent-ia5/projetos/testeNovoParser/calculadora.js");Fim.
.

