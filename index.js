//PARA RODAR EXECUTE:
//node versoes/agent-iaManual/index.js

//import OpenRouter from "./src/OpenRouter.js";

import { GerenteTools } from "./gerenciadorFerramentas/GerenteTools.js";
const gerenteTools = new GerenteTools();
await gerenteTools.iniciarIa();

import readline from "node:readline";
import arte from "./arte.js";


/*
import Duck from "./src/Duck/Duck.js";
const ia = new Duck();
await ia.iniciar();
await ia.abrir("https://duck.ai");
*/

const prompt = await gerenteTools.prompt("./agent-ia5/prompt/testeEscritaLeitura.md");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function perguntar() {
  
  console.log("MENU");
  
  rl.question("\nVocê: ", async (pergunta) => {
    if (!pergunta.trim()) {
      return perguntar();
    }

    if (pergunta.trim().toLowerCase() === "/sair") {
      rl.close();
      return;
    }

    if (pergunta.trim().toLowerCase() === "/modo:automatico") {
      await modoAutomatico();
      //return pergunta();
    }

    if (pergunta.trim().toLowerCase() === "/modo:manual") {
      await modoManual();
      return perguntar();
    }

    let ciclo = true;

    while (ciclo) {
      try {
        //gerenteTools.registrar("\npergunta do usuario: \n" + pergunta);

        //let response = await ia.processarTexto(gerenteTools.retorno + pergunta);
        let response = await gerenteTools.perguntar(gerenteTools.retorno + pergunta);

        if (response.captcha) {
          console.log("\nResolva o CAPTCHA no navegador.");

          await new Promise((resolve) => {
            rl.question("Digite OK quando terminar: ", () => resolve());
          });

          //response = await ia.processarTexto(gerenteTools.retorno + pergunta);
          response = await gerenteTools.perguntar(gerenteTools.retorno + pergunta);
        }

        //response = response.resposta.join("\n");

        console.log("\nResposta do Pato: " + response);
        //gerenteTools.registrar("Resposta do Pato: " + response);

        await gerenteTools.interpretar(response);

        const temComando = gerenteTools.ultimoResultado.comandos?.length > 0;
        if (temComando) {
          const executar = await confirmar(`\nAplicar essas mudanças? (s/n): `);

          if (executar === "s" || executar === "sim") {
            await gerenteTools.executar();

            console.log("\n✓ Mudanças aplicadas.");

            if (gerenteTools.retorno) {
              console.log(`saída do gerenteTools: ${gerenteTools.retorno}`);

              const interacao = await confirmar(
                "\ndeseja que a IA leia o retorno? (s/n): ",
              );

              if (interacao === "s") {
              
              gerenteTools.retorno = `  A ferramenta executou a ação. Retorno da ferramenta:
${gerenteTools.retorno}. Analise o retorno e continue a tarefa caso seja necessário.
              `
              } else {
                ciclo = false;
              }
            } else {
              ciclo = false;
            }
          } else {
            console.log("\n✗ Mudanças canceladas.");
            ciclo = false;
          }
        }
        ciclo = false;
      } catch (erro) {
        console.error("\nErro:", erro.message);
        ciclo = false;
      }
    }

    perguntar();
  });
}

async function modoManual() {
  console.log("\n=== MODO MANUAL ===");
  console.log("Você está assumindo o papel da IA.");
  console.log("Digite /sair para voltar.\n");

  while (true) {
    const resposta = await confirmar("Manual > ");

    if (resposta.trim().toLowerCase() === "/sair") {
      break;
    }

    if (!resposta.trim()) {
      continue;
    }

    try {
      await gerenteTools.interpretar(resposta);

      const executar = await confirmar("\nAplicar essas mudanças? (s/n): ");

      if (executar === "s" || executar === "sim") {
        await gerenteTools.executar();

        console.log("\n✓ Mudanças aplicadas.");

        if (gerenteTools.retorno) {
          console.log(`\nSaída do gerenteTools: ${gerenteTools.retorno}`);
        }
      } else {
        console.log("\n✗ Mudanças canceladas.");
      }
    } catch (erro) {
      console.error("\nErro:", erro.message);
    }
  }
}

async function modoAutomatico() {
  console.log("\n=== MODO AUTOMÁTICO ===");

  const ciclos = Number(await confirmar("Quantidade de ciclos: "));

  if (!Number.isInteger(ciclos) || ciclos <= 0) {
    console.log("Quantidade de ciclos inválida.");
    return;
  }


  for (let ciclo = 1; ciclo <= ciclos; ciclo++) {
    try {
      console.log(`\n=== CICLO ${ciclo}/${ciclos} ===`);

      const response = await ia.perguntar(contexto);

      // contexto = prompt + (await gerenteTools.tarefa("./versoes/agent-ia5/prompt/tarefas.md"));

      await gerenteTools.interpretar(response);

      const temComando = gerenteTools.ultimoResultado.comandos?.length > 0;

      if (!temComando) {
        console.log("A IA não enviou comandos.");
        break;
      }

      await gerenteTools.executar();

      const formato = `Responda em uma única linha. Comece exatamente com Description:. Depois coloque os comandos, um após o outro. Todo comando termina com ;\\n.\nExemplo de resposta: Description: Vou ler o arquivo de planejamento.\\nLer("./versoes/agent-ia5/prompt/notas.md");\\nCriar("./versoes/agent-ia5/projetos/console/console.js", "console.log(\\"Eu, eu sou o Agent5\\")");`;
      console.log(formato);

      contexto = gerenteTools.retorno + formato;

      console.log(contexto);
    } catch (erro) {
      console.error("\nErro:", erro.message);

      contexto += `Ocorreu um erro: ${erro.message} Analise o erro e continue a tarefa.`;
    }
  }
}

function confirmar(mensagem) {
  return new Promise((resolve) => {
    rl.question(mensagem, (resposta) => {
      resolve(resposta.trim());
    });
  });
}

console.log(`${arte}`);
console.log("Digite /sair para sair.");
console.log("Digite /modo:manual para assumir o papel da IA.");
console.log("Digite /modo:automatico para um ciclo do agente.");
perguntar();
