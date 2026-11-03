import { interpretarResposta } from "../utils/parser/novoParser.js";
import { FileManager as File } from "../utils/fileManager/FileManager.js";
import Processo from "../utils/childProcess/ChildProcess.js";
import Duck from "../src/Duck/Duck.js";

export class GerenteTools {
  constructor() {
    this.promptAtual = null;
    this.ultimaResposta = null;
    this.ultimoResultado = null;
    this.processo = null;
    this.retorno = "";
    this.ia = new Duck();
  }

  async iniciarIa() {
    await this.ia.iniciar();
    await this.ia.abrir("https://duck.ai");
  }


  async perguntar(texto) { 

    await this.registrar(`\npergunta:\n  ${texto}\n`);

    let response = 
      await this.ia.processarTexto(texto);

    response = response.resposta.join("\n");
    
    this.registrar(`\nResposta do Pato: \n ${response}\n`);

    return response;
  }

  async prompt(caminho) {
    this.promptAtual = await File.ler(caminho);

    this.retorno += "Lendo prompt:  " + this.promptAtual;

    return this.promptAtual;
  }


  async interpretar(resposta) {
    this.retorno = "";

    await this.registrar(resposta);

    this.ultimaResposta = resposta;
    this.ultimoResultado = interpretarResposta(resposta);

    console.dir(this.ultimoResultado, { depth: null });

    await this.registrar(JSON.stringify(this.ultimoResultado, null, 2));

    return this.ultimoResultado;
  }

  async executar() {
    this.retorno = "";
    let erros = 0;

    for (const comando of this.ultimoResultado.comandos) {
      if (erros < 3) {
        try {
          let resultado;

          switch (comando.nome) {
            case "PerguntaAnterior":
              this.retorno = 
              await this.ia.perguntaAnterior(comando.parametros[0]);
              break;

            case "CriarDir":
              resultado = await File.criarDir(comando.parametros[0]);
              this.retorno += `Criar diretório ${comando.parametros[0]}: ${resultado ?? "Diretório criado com sucesso."}  `;
              break;

            case "Criar":
              resultado = await File.criar(
                comando.parametros[0],
                comando.parametros[1],
              );

              this.retorno += `Criando ${comando.parametros[0]}: ${resultado ?? "Arquivo criado com sucesso."}  `;
              break;

            case "Ler":
              resultado = await File.ler(comando.parametros[0]);
              this.retorno += `Lendo ${comando.parametros[0]}: ${resultado}  `;
              break;

            case "LerJson":
              resultado = JSON.parse(await File.ler(comando.parametros[0]));
              this.retorno += `Lendo Json ${comando.parametros[0]} : ${JSON.stringify(resultado, null, 2)}  `;
              break;

            case "CriarJson":
              resultado = await File.criar(
                comando.parametros[0],
                JSON.stringify(comando.parametros[1], null, 2),
              );
              this.retorno += `Criando Json ${comando.parametros[0]}: ${resultado ?? "JSON criado com sucesso."}  `;
              break;

            case "Append":
              resultado = await File.append(
                comando.parametros[0],
                comando.parametros[1],
              );
              this.retorno += `Adicionando ao final de ${comando.parametros[0]}: ${resultado ?? "Conteúdo adicionado com sucesso."}  `;
              break;

            case "Existe":
              resultado = await File.exists(comando.parametros[0]);
              this.retorno += `Existe ${comando.parametros[0]}? ${resultado}\n`;
              break;

            case "Deletar":
              resultado = await File.deletar(comando.parametros[0]);
              this.retorno += `Deletando ${comando.parametros[0]}: ${resultado ?? "Arquivo deletado com sucesso."}  `;
              break;

            case "Renomear":
              resultado = await File.renomear(
                comando.parametros[0],
                comando.parametros[1],
              );
              this.retorno += `Renomeando ${comando.parametros[0]}: ${resultado ?? "Renomeado com sucesso."}  `;
              break;

            case "Copiar":
              resultado = await File.copiar(
                comando.parametros[0],
                comando.parametros[1],
              );
              this.retorno += `Copiando ${comando.parametros[0]}: ${resultado ?? "Copiado com sucesso."}  `;
              break;

            case "DeletarDir":
              resultado = await File.deletarDir(comando.parametros[0]);
              this.retorno += `Deletando diretório ${comando.parametros[0]}: ${resultado ?? "Diretório deletado com sucesso."}  `;
              break;

            case "ListarDir":
              resultado = await File.listarDir(comando.parametros[0]);
              this.retorno += `Listando diretório ${comando.parametros[0]}: ${JSON.stringify(resultado)}  `;
              break;

            case "ListarDirDetalhado":
              resultado = await File.listDirDetailed(comando.parametros[0]);
              this.retorno += `Listamdo DirDetalhado ${comando.parametros[0]}: ${JSON.stringify(resultado)}  `;
              break;

            case "Stat": {
              const info = await File.stat(comando.parametros[0]);

              resultado = {
                tamanho: info.size,
                arquivo: info.isFile(),
                diretorio: info.isDirectory(),
                criado: info.birthtime,
                modificado: info.mtime,
              };

              this.retorno += `Status de ${comando.parametros[0]}: ${JSON.stringify(resultado)}  `;
              break;
            }

            case "IsFile":
              resultado = await File.isFile(comando.parametros[0]);
              this.retorno += `${comando.parametros[0]} IsFile? ${resultado}  `;
              break;

            case "IsDir":
              resultado = await File.isDir(comando.parametros[0]);
              this.retorno += `${comando.parametros[0]} IsDir? ${resultado}  `;
              break;

            case "Join":
              resultado = File.join(...comando.parametros);
              this.retorno += `Join: ${resultado}  `;
              break;

            case "Absolute":
              resultado = File.absolute(comando.parametros[0]);
              this.retorno += `Absolute de ${comando.parametros[0]}: ${resultado}  `;
              break;

            case "Dirname":
              resultado = File.dirname(comando.parametros[0]);
              this.retorno += `Dirname de ${comando.parametros[0]}: ${resultado}  `;
              break;

            case "Basename":
              resultado = File.basename(comando.parametros[0]);
              this.retorno += `Basename de ${comando.parametros[0]}: ${resultado}  `;
              break;

            case "Extension":
              resultado = File.extension(comando.parametros[0]);
              this.retorno += `Extensão de ${comando.parametros[0]}: ${resultado}  `;
              break;

            case "Run":
              if (this.processo) {
                this.retorno += "Run: já existe um processo em execução.  ";
                break;
              }

              this.processo = new Processo(
                comando.parametros[0],
                comando.parametros[1],
              );

              this.retorno += "Run: processo iniciado com sucesso.  ";
              break;

            case "Stdin":
              if (!this.processo) {
                this.retorno += "Stdin: erro: nenhum processo em execução.  ";
                break;
              }

              resultado = await this.processo.enviar(comando.parametros[0]);

              this.retorno += `Stdin: ${resultado}\n`;
              break;

            case "Encerrar":
              if (!this.processo) {
                this.retorno +=
                  "Encerrar: erro: nenhum processo em execução.  ";
                break;
              }

              resultado = await this.processo.encerrar();

              this.retorno += `Encerrar: ${resultado ?? "processo encerrado com sucesso."}  `;
              this.processo = null;
              break;

            default:
              this.retorno += `Comando desconhecido: ${comando.nome}  `;
              break;
          }
        } catch (erro) {
          this.retorno += `ERRO em ${comando.nome}: ${erro.message}  `;
          erros++;
        }
      } else {
        erros = 0;

        this.retorno +=
          "Comandos inválidos, envie os comandos no formato esperado";
      }
    }

    await this.registrar(this.retorno);

    return this.retorno;
  }

  async registrar(registro) {
    registro += "\n";

    if (!(await File.exists("./agent-ia5/prompt/historico.md"))) {
      await File.criar("./agent-ia5/prompt/historico.md", "");
    }

    try {
      await File.append("./agent-ia5/prompt/historico.md", registro);

      console.log("File.append terminou.");
    } catch (erro) {
      console.error("ERRO NO REGISTRO:", erro);
    }
  }
}
