import { interpretarResposta } from "../utils/parser/parser.js";
import { FileManager as File } from "../utils/fileManager/FileManager.js";
import Processo from "../utils/childProcess/ChildProcess.js";

//let processo;

export class GerenteTools {
  constructor() {
    this.promptAtual = null;
    this.ultimaResposta = null;
    this.ultimoResultado = null;
    this.processo = null;
    this.retorno = "";
  }

  async prompt(caminho) {
    this.promptAtual = await File.ler(caminho);
    return this.promptAtual;
  }

  async interpretar(resposta) {
    this.ultimaResposta = resposta;
    this.ultimoResultado = interpretarResposta(resposta);

    console.dir(this.ultimoResultado, { depth: null });

    //await this.registrar(this.ultimaResposta);

    await this.registrar(JSON.stringify(this.ultimoResultado, null, 2));

    return this.ultimoResultado;
  }

  async executar() {
    this.retorno = "";
    for (const comando of this.ultimoResultado.comandos) {
      switch (comando.nome) {
        case "CriarDir":
          await File.criarDir(comando.parametros[0]);
          break;

        case "Criar":
          await File.criar(comando.parametros[0], comando.parametros[1]);
          break;

        case "Ler":
          this.retorno += await File.ler(comando.parametros[0]);
          break;

        case "LerJson":
          this.retorno += JSON.stringify(
            JSON.parse(await File.ler(comando.parametros[0])),
            null,
            2,
          );
          break;

        case "CriarJson":
          await File.criar(
            comando.parametros[0],
            JSON.stringify(comando.parametros[1], null, 2),
          );
          break;

        case "Append":
          await File.append(comando.parametros[0], comando.parametros[1]);
          break;

        case "Existe":
          this.retorno += String(await File.exists(comando.parametros[0]));
          break;

        case "Deletar":
          await File.deletar(comando.parametros[0]);
          break;

        case "Renomear":
          await File.renomear(comando.parametros[0], comando.parametros[1]);
          break;

        case "Copiar":
          await File.copiar(comando.parametros[0], comando.parametros[1]);
          break;

        case "DeletarDir":
          await File.deletarDir(comando.parametros[0]);
          break;

        case "ListarDir":
          this.retorno += JSON.stringify(
            await File.listarDir(comando.parametros[0]),
          );
          break;

        case "ListarDirDetalhado":
          this.retorno += JSON.stringify(
            await File.listDirDetailed(comando.parametros[0]),
          );
          break;

        case "Stat": {
          const info = await File.stat(comando.parametros[0]);
          this.retorno += JSON.stringify({
            tamanho: info.size,
            arquivo: info.isFile(),
            diretorio: info.isDirectory(),
            criado: info.birthtime,
            modificado: info.mtime,
          });
          break;
        }

        case "IsFile":
          this.retorno += String(await File.isFile(comando.parametros[0]));
          break;

        case "IsDir":
          this.retorno += String(await File.isDir(comando.parametros[0]));
          break;

        case "Join":
          this.retorno += File.join(...comando.parametros);
          break;

        case "Absolute":
          this.retorno += File.absolute(comando.parametros[0]);
          break;

        case "Dirname":
          this.retorno += File.dirname(comando.parametros[0]);
          break;

        case "Basename":
          this.retorno += File.basename(comando.parametros[0]);
          break;

        case  "Extension":
          this.retorno += File.extension(comando.parametros[0]);
          break;

        case "Run":
          this.processo = new Processo(
            comando.parametros[0],
            comando.parametros[1],
          );
          break;

        case "Stdin":
          this.retorno +=
            (await this.processo.enviar(comando.parametros[0])) + "\n";
          break;

        case "Encerrar":
          //this.retorno += await this.processo.encerrar();
          this.retorno += (await this.processo.encerrar()) + "\n";
          this.processo = null;
          break;

        default:
          console.log(`Comando desconhecido: ${comando.nome}`);
      }
    }

    const registro = JSON.stringify(this.retorno, null, 2) + "\n\n";

    //await this.registrar(registro);

    await this.registrar(this.retorno);
  }

  async registrar(registro) {
    console.log("=== REGISTRAR INICIO ===");

    registro += "\n";

    if (!(await File.exists("./versoes/agent-ia4/prompt/historico.md"))) {
      await File.criar("./versoes/agent-ia4/prompt/historico.md", "");
    }
    try {
      await File.append("./versoes/agent-ia4/prompt/historico.md", registro);

      console.log("File.append terminou.");
    } catch (erro) {
      console.error("ERRO NO REGISTRO:", erro);
    }
  }
}
