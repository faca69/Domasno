import { Router } from "express";
import { PostController } from "../controllers/post.controller.js";
export const postRouter = Router();

//* VIEW ALL POSTS
postRouter.get("", PostController.getAllPosts);

//* VIEW POST BY ID
postRouter.get("/:id", PostController.getPostById);

//^ CREATE POST
postRouter.post("", PostController.createPost);

//~ UPDATE POST
postRouter.put("/:id", PostController.updatePost);

//! DELETE A POST
postRouter.delete("/:id", PostController.deletePost);

//! DELETE EVERY POST
postRouter.delete("", PostController.deleteAllPosts);

//
//
//
//
//

//
//
//
//
//
//
///
//
//
//
//

// //? LIKE A POST
// postRouter.patch("/:id/like", PostController.likePost);

// //* FETCH ALL POSTS BY A CERTAIN USER
// postRouter.get("/user/:userId", PostController.getUserPosts);
