import readline from readline;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inverter(texto) {
  return texto.split().reverse().join();
}

rl.on(line, (entrada) => {
  const texto = entrada.trim();

  if (!texto) {
    console.log(Entrada vazia.);
    return;
  }

  console.log(inverter(texto));
});