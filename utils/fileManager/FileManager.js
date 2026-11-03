import fs from "node:fs/promises";
import path from "node:path";

export class FileManager {
  static async ler(filePath, encoding = "utf8") {
    return await fs.readFile(filePath, encoding);
  }

  static async lerJson(filePath) {
    const content = await this.read(filePath);
    return JSON.parse(content);
  }

  static async criar(filePath, content) {
    await fs.writeFile(filePath, content);
  }

  static async criarJson(filePath, data) {
    const content = JSON.stringify(data, null, 2);
    await this.write(filePath, content);
  }

  static async append(filePath, content) {
    await fs.appendFile(filePath, content);
  }

  static async exists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  static async deletar(filePath) {
    await fs.unlink(filePath);
  }

  static async renomear(oldPath, newPath) {
    await fs.rename(oldPath, newPath);
  }

  static async copiar(source, destination) {
    await fs.copyFile(source, destination);
  }

  static async criarDir(dirPath) {
    await fs.mkdir(dirPath, {
      recursive: true
    });
  }

  static async deletarDir(dirPath) {
    await fs.rm(dirPath, {
      recursive: true,
      force: true
    });
  }

  static async listarDir(dirPath) {
    return await fs.readdir(dirPath);
  }

  static async listDirDetailed(dirPath) {
    return await fs.readdir(dirPath, {
      withFileTypes: true
    });
  }

  static async stat(filePath) {
    return await fs.stat(filePath);
  }

  static async isFile(filePath) {
    if (!(await this.exists(filePath))) {
      return false;
    }

    const info = await this.stat(filePath);

    return info.isFile();
  }

  static async isDir(filePath) {
    if (!(await this.exists(filePath))) {
      return false;
    }

    const info = await this.stat(filePath);

    return info.isDirectory();
  }

  static join(...parts) {
    return path.join(...parts);
  }

  static absolute(filePath) {
    return path.resolve(filePath);
  }

  static dirname(filePath) {
    return path.dirname(filePath);
  }

  static basename(filePath) {
    return path.basename(filePath);
  }

  static extension(filePath) {
    return path.extname(filePath);
  }
}
