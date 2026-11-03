const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tarefas = [];

function mostrarMenu() {
  console.log('\n=== LISTA DE TAREFAS ===');
  console.log('1. Adicionar tarefa');
  console.log('2. Listar tarefas');
  console.log('3. Remover tarefa');
  console.log('4. Sair');
  rl.question('Escolha uma opção: ', processarOpcao);
}

function processarOpcao(opcao) {
  switch(opcao.trim()) {
    case '1':
      rl.question('Digite a tarefa: ', (tarefa) => {
        if (tarefa.trim()) {
          tarefas.push(tarefa.trim());
          console.log('Tarefa adicionada com sucesso!');
        } else {
          console.log('Tarefa não pode ser vazia!');
        }
        mostrarMenu();
      });
      break;
    case '2':
      if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
      } else {
        console.log('\n--- SUAS TAREFAS ---');
        tarefas.forEach((tarefa, index) => {
          console.log(`${index + 1}. ${tarefa}`);
        });
      }
      mostrarMenu();
      break;
    case '3':
      if (tarefas.length === 0) {
        console.log('Nenhuma tarefa para remover.');
        mostrarMenu();
      } else {
        console.log('\n--- SUAS TAREFAS ---');
        tarefas.forEach((tarefa, index) => {
          console.log(`${index + 1}. ${tarefa}`);
        });
        rl.question('Digite o número da tarefa para remover: ', (num) => {
          const indice = parseInt(num) - 1;
          if (indice >= 0 && indice < tarefas.length) {
            const removida = tarefas.splice(indice, 1);
            console.log(`Tarefa "${removida[0]}" removida com sucesso!`);
          } else {
            console.log('Número inválido!');
          }
          mostrarMenu();
        });
      }
      break;
    case '4':
      console.log('Até logo!');
      rl.close();
      break;
    default:
      console.log('Opção inválida!');
      mostrarMenu();
  }
}

console.log('Bem-vindo à Lista de Tarefas!');
mostrarMenu();