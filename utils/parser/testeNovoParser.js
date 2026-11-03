import { interpretarResposta } from "./novoParser.js";
//Descrição: Criar uma calculadora; Comandos: Criar("./agent-ia5/projetos/testeNovoParser/calculadora.js"); Ler("./calculadora.js"); tFim.';
const resposta =
  'Descrição: Criar uma calculadora; Comandos: Criar("./calculadora.js"); Ler("./calculadora.js");Fim.';

try {
  const resultado = interpretarResposta(resposta);

  console.log("\n=== RESULTADO ===");
  console.log("Descrição:", resultado.descricao);

  console.log("\n=== COMANDOS ===");

  for (const comando of resultado.comandos) {
    console.log("Nome:", comando.nome);
    console.log("Parâmetros:", comando.parametros);
  }

  console.log("\n=== TESTES ===");

  console.log(
    resultado.descricao === "Criar uma calculadora"
      ? "✓ Descrição"
      : "✗ Descrição",
  );

  console.log(
    resultado.comandos.length === 2
      ? "✓ Quantidade de comandos"
      : "✗ Quantidade de comandos",
  );

  console.log(
    resultado.comandos[0].nome === "Criar" ? "✓ Nome Criar" : "✗ Nome Criar",
  );

  console.log(
    resultado.comandos[0].parametros[0] === "./calculadora.js"
      ? "✓ Caminho"
      : "✗ Caminho",
  );

  console.log(
    resultado.comandos[0].parametros[1] === "console.log(2 + 2);"
      ? "✓ Conteúdo com ponto e vírgula"
      : "✗ Conteúdo com ponto e vírgula",
  );

  console.log(
    resultado.comandos[1].nome === "Ler" ? "✓ Nome Ler" : "✗ Nome Ler",
  );

  console.log(
    resultado.comandos[1].parametros[0] === "./calculadora.js"
      ? "✓ Parâmetro Ler"
      : "✗ Parâmetro Ler",
  );

  console.log("\n=== TESTE FINALIZADO ===");
} catch (erro) {
  console.error("ERRO NO TESTE:", erro.message);
}
