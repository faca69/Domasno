import { Router } from "express";
import AuthController from "../CONTROLLERS/auth.controllers.js";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

export default router;
