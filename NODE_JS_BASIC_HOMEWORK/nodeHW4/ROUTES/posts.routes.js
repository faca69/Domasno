import { Router } from "express";
import PostController from "../CONTROLLERS/posts.controller.js";

const router = Router();

//* VIEW ALL POSTS
router.get("", PostController.getPosts);

//* VIEW POST BY ID
router.get("/:id", PostController.getPost);

//^ CREATE POST
router.post("", PostController.createPost);

//~ UPDATE POST TITLE
router.patch("/:id/title", PostController.updatePostTitle);

//~ UPDATE POST CONTENT
router.patch("/:id/content", PostController.updatePostContent);

//! DELETE A POST
router.delete("/:id", PostController.deletePost);

//! DELETE EVERY POST
router.delete("", PostController.deleteAllPosts);

//? LIKE A POST
router.patch("/:id/like", PostController.likePost);

//* FETCH ALL POSTS BY A CERTAIN USER
router.get("/user/:userId", PostController.getUserPosts);

export default router;
