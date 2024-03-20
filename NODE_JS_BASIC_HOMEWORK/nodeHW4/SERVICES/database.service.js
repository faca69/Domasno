import fs from "fs/promises";

export default class DatabaseService {
  static async readData(DATABASE_PATH) {
    const arrayData = await fs.readFile(DATABASE_PATH);

    return JSON.parse(arrayData);
  }

  static async writeData(DATABASE_PATH, DATA) {
    return fs.writeFile(DATABASE_PATH, JSON.stringify(DATA, null, 2));
  }
}
