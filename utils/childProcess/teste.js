import Processo from "./ChildProcess.js";

const processo = new Processo("node", "./calculadora.js");

const resultado = await processo.enviar("2 * 4");

console.log("Resultado:", resultado);

processo.encerrar();
