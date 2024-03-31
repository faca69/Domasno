import { Router } from "express";
import UserController from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/logout", UserController.logout);
//
userRouter.get("/:id", UserController.getUser);
//
//
userRouter.patch("/:userId/post/:postId", UserController.togglePost);
