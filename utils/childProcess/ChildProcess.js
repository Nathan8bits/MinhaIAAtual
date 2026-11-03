import { spawn } from "child_process";

export default class Processo {
  constructor(comando, arquivo) {
    this.erro = null;
    this.processo = spawn(comando, [arquivo]);

    this.processo.on("error", (erro) => {
      this.erro = erro;
    });

    this.processo.on("close", (codigo) => {
      this.codigo = codigo;
    });
  }

  enviar(dado) {
    return new Promise((resolve, reject) => {
      if (this.erro) {
        reject(this.erro);
        return;
      }

      this.processo.stdout.once("data", (dados) => {
        resolve(dados.toString().trim());
      });

      this.processo.stderr.once("data", (dados) => {
        const erro = new Error(dados.toString().trim());
        this.erro = erro;
        reject(erro);
      });

      this.processo.once("error", (erro) => {
        this.erro = erro;
        reject(erro);
      });

      this.processo.stdin.write(dado + "\n");
    });
  }

  encerrar() {
    if (!this.processo) {
      throw new Error("Processo não existe.");
    }

    return this.processo.kill();
  }
}
