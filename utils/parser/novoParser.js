export function interpretarResposta(resposta) {
  const resultado = separarResposta(resposta);

  resultado.comandos = resultado.comandos.map(interpretarComando);

  return resultado;
}

function separarResposta(resposta) {
  const texto = resposta.trim();

  const inicioDescricao = "Descrição:";
  const inicioComandos = "; Comandos:";
  const fimResposta = "Fim.";

  if (!texto.startsWith(inicioDescricao)) {
    throw new Error("Resposta inválida: deve começar com 'Descrição:'");
  }

  const posicaoComandos = texto.indexOf(inicioComandos);

  if (posicaoComandos === -1) {
    throw new Error("Resposta inválida: 'Comandos:' não encontrado");
  }

  const descricao = texto.slice(inicioDescricao.length, posicaoComandos).trim();

  const inicioComandosPosicao = posicaoComandos + inicioComandos.length;

  const posicaoFim = texto.lastIndexOf(fimResposta);

  if (posicaoFim === -1 || posicaoFim < inicioComandosPosicao) {
    throw new Error("Resposta inválida: 'Fim.' não encontrado");
  }

  const conteudoComandos = texto
    .slice(inicioComandosPosicao, posicaoFim)
    .trim();

  return {
    descricao,
    comandos: separarComandos(conteudoComandos),
  };
}

function separarComandos(texto) {
  const comandos = [];

  let atual = "";
  let dentroDasAspas = false;
  let escapado = false;

  for (let i = 0; i < texto.length; i++) {
    const caractere = texto[i];

    if (escapado) {
      atual += caractere;
      escapado = false;
      continue;
    }

    if (caractere === "\\" && dentroDasAspas) {
      atual += caractere;
      escapado = true;
      continue;
    }

    if (caractere === '"') {
      dentroDasAspas = !dentroDasAspas;
      atual += caractere;
      continue;
    }

    if (caractere === ";" && !dentroDasAspas) {
      if (atual.trim() !== "") {
        comandos.push(atual.trim());
      }

      atual = "";
      continue;
    }

    atual += caractere;
  }

  if (atual.trim() !== "") {
    comandos.push(atual.trim());
  }

  return comandos;
}

function interpretarComando(linha) {
  const comando = linha.trim();

  const inicioParametros = comando.indexOf("(");
  const fimParametros = comando.lastIndexOf(")");

  if (inicioParametros === -1 || fimParametros === -1) {
    return {
      nome: comando,
      parametros: [],
    };
  }

  const nome = comando.slice(0, inicioParametros).trim();

  const conteudoParametros = comando.slice(inicioParametros + 1, fimParametros);

  return {
    nome,
    parametros: interpretarParametros(conteudoParametros),
  };
}

function interpretarParametros(conteudo) {
  const parametros = [];

  let atual = "";
  let dentroDasAspas = false;
  let escapado = false;

  for (let i = 0; i < conteudo.length; i++) {
    const caractere = conteudo[i];

    if (escapado) {
      if (caractere === "n") {
        atual += "\n";
      } else if (caractere === "r") {
        atual += "\r";
      } else if (caractere === "t") {
        atual += "\t";
      } else {
        atual += caractere;
      }

      escapado = false;
      continue;
    }

    if (caractere === "\\" && dentroDasAspas) {
      escapado = true;
      continue;
    }

    if (caractere === '"') {
      dentroDasAspas = !dentroDasAspas;
      continue;
    }

    if (caractere === "," && !dentroDasAspas) {
      parametros.push(atual.trim());
      atual = "";
      continue;
    }

    atual += caractere;
  }

  if (atual.trim() !== "" || conteudo.trim() !== "") {
    parametros.push(atual.trim());
  }

  return parametros;
}
