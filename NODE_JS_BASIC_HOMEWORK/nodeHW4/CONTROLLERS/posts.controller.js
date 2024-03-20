import PostService from "../SERVICES/posts.service.js";
import { BadRequest, NotFound } from "../CONSTS/errors.const.js";

export default class PostController {
  static async getPosts(req, res) {
    try {
      const posts = await PostService.getPosts();

      res.send(posts);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async getPost(req, res) {
    try {
      const post = await PostService.getPost(req.params.id);
      res.send(post);
    } catch (error) {
      if (error instanceof NotFound) {
        res.status(404).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async createPost(req, res) {
    try {
      //*                                                     this
      const post = await PostService.createPost(req.body, req.session.userId);

      res.status(201).send(post);
    } catch (error) {
      if (error instanceof NotFound) {
        res.status(404).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async updatePostTitle(req, res) {
    try {
      const post = await PostService.updatePostTitle(
        req.params.id,
        req.body.title,
        req.session.userId
      );
      res.send(post);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async updatePostContent(req, res) {
    try {
      const post = await PostService.updatePostContent(
        req.params.id,
        req.body.content,
        req.session.userId
      );
      res.send(post);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async deletePost(req, res) {
    try {
      await PostService.deletePost(req.params.id, req.session.userId);
      res.sendStatus(204);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async deleteAllPosts(req, res) {
    try {
      await PostService.deleteAllPosts();

      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  ////////////////////////////////////////////////////////////&

  static async getUserPosts(req, res) {
    try {
      const posts = await PostService.getUserPosts(req.params.userId);
      res.send(posts);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async likePost(req, res) {
    try {
      const likedPost = await PostService.likePost(
        req.params.id,
        req.session.userId
      );
      res.send(likedPost);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }
}
