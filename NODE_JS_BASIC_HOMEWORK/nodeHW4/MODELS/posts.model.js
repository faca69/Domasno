import { NotFound, BadRequest } from "../CONSTS/errors.const.js";
import databaseService from "../SERVICES/database.service.js";
import path from "path";

const DATABASE = path.join(import.meta.dirname, "..", "DATABASE", "posts.json");

export default class PostModel {
  static async getAll() {
    return databaseService.readData(DATABASE);
  }

  static async getPostById(id) {
    const posts = await this.getAll();

    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFound("Post Not Found");
    }

    return post;
  }

  static async create(post) {
    const posts = await this.getAll();

    posts.push(post);

    await databaseService.writeData(DATABASE, posts);

    return post;
  }

  static async update(id, post) {
    const posts = await this.getAll();

    const index = posts.findIndex((post) => post.id === id);

    posts[index] = post;

    await databaseService.writeData(DATABASE, posts);

    return post;
  }

  static async delete(id, userId) {
    const posts = await this.getAll();

    const post = posts.find((p) => p.id === id);

    const postCEO = post.userId;

    if (userId !== postCEO) {
      throw new BadRequest("CANNOT DELETE OTHER USERS POSTS");
    }
    const filteredPosts = posts.filter((post) => post.id !== id);

    await databaseService.writeData(DATABASE, filteredPosts);
  }

  static async deleteAll() {
    await databaseService.writeData(DATABASE, []);
  }
}
