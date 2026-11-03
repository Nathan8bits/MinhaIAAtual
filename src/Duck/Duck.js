import puppeteer from "puppeteer";

export default class Duck {
  constructor() {
    this.browser = null;
    this.page = null;
    this.blocoAnterior = null;
  }

  async iniciar(opcoes = {}) {
    this.browser = await puppeteer.launch({
      headless: false,
      userDataDir: "./agent-ia5/src/Duck/perfis/duck/teste23102026/",
      executablePath: "/data/data/com.termux/files/usr/bin/chromium-browser",
      args: ["--display=:0"],
      ...opcoes,
    });
    this.page = await this.browser.newPage();

    //await this.abrir("https://chatgpt.com/");

    return this.page;
  }

  async abrir(url) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    await this.page.waitForSelector("body");
  }

  async esperar(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }

  async clicar(seletor) {
    await this.page.click(seletor);
  }

  async escrever(seletor, texto) {
    await this.page.locator(seletor).fill(texto);
  }

  async pressionar(tecla) {
    await this.page.keyboard.press(tecla);
  }

  async texto(seletor) {
    const elemento = await this.page.$(seletor);

    if (!elemento) {
      return null;
    }

    return await elemento.evaluate((elemento) => elemento.innerText);
  }

  async textoVisivel() {
    await this.page.waitForSelector("body");

    return await this.page.$eval("body", (body) => body.innerText);
  }

  async html(seletor) {
    const elemento = await this.page.$(seletor);

    if (!elemento) {
      return null;
    }

    return await elemento.evaluate((elemento) => elemento.innerHTML);
  }

  async domSimplificado() {
    return await this.page.evaluate(() => {
      function percorrer(elemento) {
        const resultado = [];

        for (const filho of elemento.children) {
          const texto = filho.innerText?.trim().replace(/\s+/g, " ");

          const dados = {
            tag: filho.tagName.toLowerCase(),
          };

          const atributos = [
            "id",
            "class",
            "role",
            "aria-label",
            "placeholder",
            "type",
            "name",
            "contenteditable",
          ];

          for (const atributo of atributos) {
            const valor = filho.getAttribute(atributo);

            if (valor) {
              dados[atributo] = valor;
            }
          }

          if (texto && texto.length <= 150) {
            dados.texto = texto;
          }

          const importante =
            ["input", "textarea", "button", "form"].includes(
              filho.tagName.toLowerCase(),
            ) ||
            filho.getAttribute("role") ||
            filho.getAttribute("contenteditable") === "true" ||
            filho.getAttribute("aria-label") ||
            filho.getAttribute("placeholder");

          if (importante) {
            resultado.push(dados);
          }

          resultado.push(...percorrer(filho));
        }

        return resultado;
      }

      return percorrer(document.body);
    });
  }

  async atributo(seletor, atributo) {
    const elemento = await this.page.$(seletor);

    if (!elemento) {
      return null;
    }

    return await elemento.evaluate(
      (elemento, atributo) => elemento.getAttribute(atributo),
      atributo,
    );
  }

  async existe(seletor) {
    return (await this.page.$(seletor)) !== null;
  }

  async esperarElemento(seletor, opcoes = {}) {
    await this.page.waitForSelector(seletor, opcoes);
  }

  async esperarUrl(url) {
    await this.page.waitForFunction(
      (url) => location.href.includes(url),
      {},
      url,
    );
  }

  async screenshot(caminho) {
    await this.page.screenshot({
      path: caminho,
    });
  }

  async titulo() {
    return await this.page.title();
  }

  async url() {
    return this.page.url();
  }

  async executar(funcao, ...args) {
    return await this.page.evaluate(funcao, ...args);
  }

  async novaAba() {
    return await this.browser.newPage();
  }

  async fechar() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.page = null;
    }
  }

  diferencaTexto(antes, depois, ignorar = []) {
    const linhasAntes = antes
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    const linhasDepois = depois
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    const conjuntoAntes = new Set(linhasAntes);
    const conjuntoIgnorar = new Set(ignorar);

    const linhas = linhasDepois.filter(
      (linha) => !conjuntoAntes.has(linha) && !conjuntoIgnorar.has(linha),
    );

    const indice = linhas.indexOf("Duck.ai said");

    if (indice === -1) {
    console.log(`retorno do diferencaTexto(): ${linhas}`)

      return {
        captcha: false,
        resposta: linhas,
      };
    }

    const resposta = linhas.slice(indice + 1);

    if(resposta.length > 0) {
      resposta.shift();
    }

    console.log(`retorno do diferencaTexto(): ${resposta}`)

    return {
      captcha: false,
      resposta,
    };

    /*
    return linhasDepois.filter(
      (linha) => !conjuntoAntes.has(linha) && !conjuntoIgnorar.has(linha),
    );*/
  }

  async processarTexto(texto) {
    const limite = 90;
    let carregamento = 0;

    // Converte quebras de linha reais em dois caracteres: \ e n
    texto = texto.replace(/\r\n|\r|\n/g, "\\n");

    const blocos = [];
    let bloco = "";
    let i = 0;

    while (i < texto.length) {
      // Mantém a sequência literal \n indivisível
      const tamanho = texto[i] === "\\" && texto[i + 1] === "n" ? 2 : 1;

      // Se a sequência não couber, fecha o bloco atual
      if (bloco.length + tamanho > limite) {
        blocos.push(bloco);
        bloco = "";
        continue;
      }

      bloco += texto.slice(i, i + tamanho);
      i += tamanho;

      if (bloco.length >= limite) {
        blocos.push(bloco);
        bloco = "";
      }
    }

    if (bloco.length > 0) {
      blocos.push(bloco);
    }

    for (let i = 0; i < blocos.length; i++) {
      let trecho = blocos[i];

      //console.log(`${i} - ${i+1}`);

      if (blocos.length > 1) {
        /*
        if (i === 0) {
          trecho += "^" + (i+1);
        } else */
        if (i === blocos.length - 1) {
          trecho = i + "^" + trecho;
        } else {
          trecho = i + "^" + trecho + "^" + (i + 1);
        }
      }

      trecho += "\n";

      blocos[i] = trecho;

      await this.esperar(1000);
      const response = await this.perguntar(trecho);

      console.log("Duck: ", response);

      if (response.erro) {
        console.log("Falha no bloco:", i, response.mensagem);

        //return response;
      }
      if (i === blocos.length - 1) {
        console.log("retorno: " + response.resposta);

        return response;
      }

      carregamento += trecho.length;

      console.log(`${carregamento}/${texto.length}`);
    }

    this.blocoAnterior = blocos;
  }

  async executarAcao(texto) {
    console.log("\n processando:", texto);
  }

  async perguntaAnterior(indexs = null) {
    if (indexs === null) {
      indexs = this.blocoAnterior.map((_, i) => i);
    }

    for (const i of indexs) {
      const trecho = this.blocoAnterior[i];

      if (trecho !== undefined) {
        const response = await this.perguntar(trecho);
      }

      if (i == indexs.length - 1) {
        return response;
      }
    }
  }

  async perguntar(pergunta) {
    console.log("PERGUNTA RECEBIDA:", typeof pergunta);
    console.log("TAMANHO:", pergunta.length);

    let textoAntes;
    let textoDepois;

    const campo = 'textarea[name="user-prompt"]';
    const botao = 'button[aria-label="Send"]';

    try {
      console.log(JSON.stringify(pergunta));

      console.log("Digitando");
      await this.page.locator(campo).fill(pergunta);
      console.log("Enviado");

      textoAntes = await this.textoVisivel();
      textoDepois = textoAntes;

      let contador = 1;
      while (textoAntes == textoDepois) {
        await this.esperar(1500);

        console.log(`${contador} - recebendo resposta`);
        contador++;

        textoDepois = await this.textoVisivel();

        let respostaChat =
          {
            resposta: [],
          };
        if (textoDepois != textoAntes) {
          //while (respostaChat.resposta == [])
          
          //console.log(textoDepois);
          //
          let tentativas = 0
          while (respostaChat.resposta.length === 0 && tentativas < 20)
          {

            tentativas++;

            respostaChat = this.diferencaTexto(textoAntes, textoDepois, [
              pergunta,
              "Response complete",
              "GPT-6 Luna",
              "New",
              "2nd opinion",
              "Jump to latest response",
              "All chats are private. AI can make mistakes.",
            ]);

            if(respostaChat.resposta.length > 0) {

            console.log("Resposta chat: ");
            console.log(JSON.stringify(respostaChat));
            } else {
              console.log("sem resposta");
            }


            await this.esperar(1000);
            textoDepois = await this.textoVisivel();
          }

          return respostaChat;
        }

        if (contador == 10) {
          contador = 1;

          console.log("Digitando");
          await this.page.locator(campo).fill(pergunta);
          console.log("Enviado");

          textoAntes = await this.textoVisivel();
          textoDepois = textoAntes;
        }
      }

      /*
      console.log("Digitando");
      await this.page.locator(campo).fill(pergunta);

      textoAntes = await this.textoVisivel();
      textoDepois = textoAntes;

      console.log("Enviado");
      */
    } catch (erro) {
      return {
        captcha: true,
        erro: true,
        mensagem: erro.message,
        resposta: [],
      };
    }

    /*
    const linhas = this.diferencaTexto(textoAntes, textoDepois, [
      pergunta,
      "Response complete",
      "GPT-6 Luna",
      //"Generating response",
      "New",
      "Annymized by DuckDuckGo. Zero data retention for this chat. No AI training. Learn more",
      "2nd opinion",
      "Jump to latest response",
      "All chats are private. AI can make mistakes.",
    ]);

    const indice = linhas.indexOf("Duck.ai said");

    if (indice === -1) {
      return {
        captcha: false,
        resposta: linhas,
      };
    }

    const resposta = linhas.slice(indice + 1);

    if (resposta.length > 0) {
      resposta.shift();
    }

    console.log(JSON.stringify(resposta));

    return {
      captcha: false,
      resposta,
    };*/

    //return resposta;
  }
}
