import { FileManager as File } from "./FileManager2.js";

async function main() {
  const dir = "./teste-fs";
  const arquivo = File.join(dir, "arquivo.txt");
  const copia = File.join(dir, "copia.txt");
  const json = File.join(dir, "dados.json");
  const renomeado = File.join(dir, "renomeado.txt");

  await File.deleteDir(dir);

  await File.createDir(dir);

  console.log("Diretório criado:", await File.isDir(dir));

  await File.write(arquivo, "Primeira linha");

  console.log("Arquivo criado:", await File.isFile(arquivo));
  console.log("Conteúdo:", await File.read(arquivo));

  await File.append(arquivo, "\nSegunda linha");

  console.log("Depois do append:");
  console.log(await File.read(arquivo));

  await File.copy(arquivo, copia);

  console.log("Cópia existe:", await File.exists(copia));

  await File.rename(copia, renomeado);

  console.log("Renomeado:", await File.exists(renomeado));

  await File.writeJson(json, {
    nome: "Natan",
    projeto: "minhaAi",
    ativo: true
  });

	  const dados = await File.readJson(json);

	  console.log("JSON:", dados);

	  const info = await File.stat(arquivo);

	  console.log("Tamanho:", info.size);
	  console.log("Diretório:", File.dirname(arquivo));
	  console.log("Nome:", File.basename(arquivo));
	  console.log("Extensão:", File.extension(arquivo));
	  console.log("Absoluto:", File.absolute(arquivo));

	  const arquivos = await File.listDir(dir);

	  console.log("Arquivos:", arquivos);

	  const detalhado = await File.listDirDetailed(dir);

	  for (const item of detalhado) {
		    console.log(
			      item.name,
			      item.isFile() ? "arquivo" : "diretório"
			    );
		  }

	  await File.delete(renomeado);

	  console.log("Renomeado removido:", !(await File.exists(renomeado)));

	  await File.deleteDir(dir);

	  console.log("Diretório removido:", !(await File.exists(dir)));
}

main();
