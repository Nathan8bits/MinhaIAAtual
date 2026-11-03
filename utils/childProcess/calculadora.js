import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcular(a, operador, b) {
  switch (operador) {
    case "+":
      return (a + b);

    case "-":
      return (a - b);

    case "*":
      return (a * b);

    case "/":
      if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return (a / b);

    default:
      throw new Error("Operador inválido.");
  }
}

rl.on("line", (entrada) => {
  const partes = entrada.trim().split(/\s+/);

  const a = Number(partes[0]);
  const operador = partes[1];
  const b = Number(partes[2]);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Números inválidos.");
    return;
  }

  try {
    const resultado = calcular(a, operador, b);

    console.log(resultado);
  } catch (erro) {
    console.error(erro.message);
  }
});
