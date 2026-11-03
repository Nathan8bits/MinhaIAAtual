import { interpretarResposta } from "./parser.js";

const resposta = `
Description:
Vou criar um projeto.
Primeiro vou criar a pasta.
Depois vou criar os arquivos.

CriarDir("projeto");
Criar("projeto/index.html", "<h1>Hello</h1>");
Criar("projeto/app.js", "console.log(\\"Hello\\")");
`;

const resultado = interpretarResposta(resposta);

console.dir(resultado, { depth: null });
