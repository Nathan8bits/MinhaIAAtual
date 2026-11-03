export function interpretarResposta(resposta) {
  const resultado = separarResposta(resposta);

  resultado.comandos = resultado.comandos.map(interpretarComando);

  return resultado;
}

function separarResposta(resposta) {
  const linhas = [];

  let atual = "";
  let dentroDasAspas = false;
  let escapado = false;

  for (let i = 0; i < resposta.length; i++) {
    const caractere = resposta[i];

    if (escapado) {
      atual += "\\";
      atual += caractere;
      escapado = false;
      continue;
    }

    if (caractere === "\\" && dentroDasAspas) {
      escapado = true;
      continue;
    }

    if (caractere === '"') {
      dentroDasAspas = !dentroDasAspas;
      atual += caractere;
      continue;
    }

    if (caractere === "\\" && resposta[i + 1] === "n" && !dentroDasAspas) {
      linhas.push(atual);
      atual = "";
      i++;
      continue;
    }

    if (caractere === "\n" && !dentroDasAspas) {
      linhas.push(atual);
      atual = "";
      continue;
    }

    atual += caractere;
  }

  if (atual.trim() !== "") {
    linhas.push(atual);
  }

  const linhasDescricao = [];
  const linhasComandos = [];

  let encontrouComando = false;

  for (const linha of linhas) {
    const texto = linha.trim();

    if (texto === "") {
      continue;
    }

    if (texto === "Description:") {
      continue;
    }

    if (texto.endsWith(";")) {
      encontrouComando = true;
    }

    if (encontrouComando) {
      linhasComandos.push(texto);
    } else {
      linhasDescricao.push(texto);
    }
  }

  return {
    descricao: linhasDescricao.join("\n"),
    comandos: linhasComandos,
  };
}

function interpretarComando(linha) {
  const comando = linha.trim().replace(/;$/, "");

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

  for (let i = 0; i < conteudo.length; i++) {
    const caractere = conteudo[i];

    if (caractere === '"') {
      dentroDasAspas = !dentroDasAspas;
      continue;
    }

    if (caractere === "\\" && dentroDasAspas) {
      const proximo = conteudo[i + 1];

      if (proximo === '"') {
        atual += '"';
        i++;
        continue;
      }

      if (proximo === "\\") {
        atual += "\\";
        i++;
        continue;
      }

      if (proximo === "n") {
        atual += "\n";
        i++;
        continue;
      }

      if (proximo === "r") {
        atual += "\r";
        i++;
        continue;
      }

      if (proximo === "t") {
        atual += "\t";
        i++;
        continue;
      }

      atual += "\\";
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
