import { postSchema } from "../schemas/post.schema.js";
import { PostService } from "../services/post.service.js";
import { BadRequest, NotFound } from "../const/errors.const.js";

export class PostController {
  static async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //
  //
  //
  static async getPostById(req, res) {
    try {
      const postId = req.params.id;
      const post = await PostService.getPostById(postId);
      res.json(post);
    } catch (error) {
      if (error instanceof NotFound) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
  //
  //
  //
  static async createPost(req, res) {
    try {
      const postData = req.body;

      await postSchema.validateAsync(postData);

      const newPost = await PostService.createPost(postData);

      res.json(newPost);
    } catch (error) {
      if (error instanceof NotFound) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //
  //
  //

  static async updatePost(req, res) {
    try {
      const updateData = req.body;

      await postSchema.validateAsync(updateData);

      const response = await PostService.updatePost(req.params.id, updateData);

      res.json(response);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //
  //
  //

  static async deletePost(req, res) {
    try {
      await PostService.deletePost(req.params.id);
      res.jsonStatus(204);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
  //
  //
  //
  static async deleteAllPosts(req, res) {
    try {
      await PostService.deleteAllPosts();
      res.jsonStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
