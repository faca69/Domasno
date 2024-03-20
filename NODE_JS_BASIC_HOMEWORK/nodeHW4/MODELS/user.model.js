import databaseService from "../SERVICES/database.service.js";
import path from "path";

const DATABASE = path.join(import.meta.dirname, "..", "DATABASE", "users.json");
export default class UserModel {
  static async getAll() {
    return databaseService.readData(DATABASE);
  }

  static async getUserByUsername(username) {
    const users = await this.getAll();

    return users.find((user) => user.username === username);
  }

  static async create(user) {
    const users = await this.getAll();

    users.push(user);

    await databaseService.writeData(DATABASE, users);
    return user;
  }
}
