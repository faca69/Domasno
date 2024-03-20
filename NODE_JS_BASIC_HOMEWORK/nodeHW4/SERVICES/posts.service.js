import { BadRequest } from "../CONSTS/errors.const.js";
import PostModel from "../MODELS/posts.model.js";
import { v4 as uuidv4 } from "uuid";

export default class PostService {
  static async getPosts() {
    return PostModel.getAll();
  }

  static async getPost(id) {
    return PostModel.getPostById(id);
  }

  static async createPost(body, userId) {
    //* userId
    const post = {
      ...body,
      userId, //* userId
      id: uuidv4(),
      postCreatedAt: new Date().toISOString(),
    };

    const createdPost = await PostModel.create(post);

    return createdPost;
  }

  static async updatePostContent(id, content, userId) {
    const post = await this.getPost(id);

    const postCEO = post.userId;

    if (userId !== postCEO) {
      throw new BadRequest("CANNOT EDIT OTHER USERS POSTS");
    }

    const toBeUpdatedPost = {
      ...post,
      content,
      id,
      contentUpdatedAt: new Date().toISOString(),
    };

    const updatedPost = await PostModel.update(id, toBeUpdatedPost);

    return updatedPost;
  }

  static async updatePostTitle(id, title, userId) {
    const post = await this.getPost(id);

    const postCEO = post.userId;

    if (userId !== postCEO) {
      throw new BadRequest("CANNOT EDIT OTHER USERS POSTS");
    }

    const toBeUpdatedPost = {
      ...post,
      title,
      id,
      titleUpdatedAt: new Date().toISOString(),
    };

    const updatedPost = await PostModel.update(id, toBeUpdatedPost);

    return updatedPost;
  }

  static deletePost(id, userId) {
    return PostModel.delete(id, userId);
  }
  static deleteAllPosts() {
    return PostModel.deleteAll();
  }

  ////////////////////////////////////////////////////////////&

  static async likePost(id, userId) {
    const post = await this.getPost(id);

    const postCEO = post.userId;

    if (userId === postCEO) {
      throw new BadRequest("Users cannot like their own posts");
    }

    const isLiked = post.likedBy.includes(userId);

    if (isLiked) {
      post.likedBy = post.likedBy.filter((liker) => liker !== userId);
    } else {
      post.likedBy.push(userId);
    }

    const likedPost = await PostModel.update(id, post);

    return likedPost;
  }

  static async getUserPosts(userId) {
    const posts = await PostModel.getAll();
    return posts.filter((post) => post.userId === userId);
  }
}
