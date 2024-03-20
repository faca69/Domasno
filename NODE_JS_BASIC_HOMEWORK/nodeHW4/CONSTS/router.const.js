import { Router } from "express";
import postsRouter from "../ROUTES/posts.routes.js";
import authRouter from "../ROUTES/auth.routes.js";
import { authSession } from "./sessions.const.js";
import validateAuthSession from "../MIDDLEWARE/auth-session-validator.middleware.js";

const router = Router();

router.use("/posts", authSession, validateAuthSession, postsRouter);
router.use("/auth", authSession, authRouter);

export default router;
