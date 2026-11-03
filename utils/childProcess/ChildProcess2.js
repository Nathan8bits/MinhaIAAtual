import { spawn } from "child_process";

export default class Processo {
  constructor(comando, arquivo) {
    this.processo = spawn(comando, [arquivo]);

    this.processo.on("error", (erro) => {
      console.error("Erro ao iniciar:", erro);
    });

    this.processo.on("close", (codigo) => {
      console.log("Processo encerrado:", codigo);
    });
  }

  enviar(dado) {
    return new Promise((resolve, reject) => {
      this.processo.stdout.once("data", (dados) => {
        resolve(dados.toString().trim());
      });

      this.processo.stderr.once("data", (dados) => {
        reject(new Error(dados.toString()));
      });

      this.processo.stdin.write(dado + "\n");
    });
  }

  encerrar() {
    return this.processo.kill();
  }
}
