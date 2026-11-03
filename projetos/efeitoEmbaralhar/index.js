async function embaralhar(texto) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  const intervalo = 30;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < 5; j++) {
      resultado = texto
        .split("")
        .map((letra, index) => {
          if (index < i) return letra;
          return caracteres[Math.floor(Math.random() * caracteres.length)];
        })
        .join("");

      console.clear();
      console.log(resultado);
      await new Promise((resolve) => setTimeout(resolve, intervalo));
    }
  }

  console.clear();
  console.log(texto);
}

/*
async function escrever(texto, intervalo = 50) {
      for (const caractere of texto) {
            process.stdout.write(caractere);
            await new Promise(resolve => setTimeout(resolve, intervalo));
        }

      console.log();
}
*/

async function escrever(texto, intervalo = 30, ciclos = 5) {
      const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
      let resultado = '';

      for (const letra of texto) {
            if (letra === ' ') {
                  resultado += ' ';
                  continue;
              }

            for (let i = 0; i < ciclos; i++) {
                  const aleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];

                  process.stdout.write('\r' + resultado + aleatorio);
                  await new Promise(resolve => setTimeout(resolve, intervalo));
              }

            resultado += letra;
            process.stdout.write('\r' + resultado);
        }

      console.log();
}

 //embaralhar("exemplo de texto");
escrever("exemplo de texto pelo escrever, funcionou");

escrever("exemplo de texto pelo escrever, funcionou 2");
console.log("teste")
