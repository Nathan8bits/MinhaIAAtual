import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('gerador de senha');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

rl.on('line', (entrada) => {
  const tamanho = Number(entrada.trim());

  if (!Number.isInteger(tamanho) || tamanho < 4 || tamanho > 100) {
    console.log('Informe um tamanho entre 4 e 100.');
    return;
  }

  let senha = '';

  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  console.log(senha);
});