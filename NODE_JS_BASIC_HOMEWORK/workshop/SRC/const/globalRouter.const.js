import { Router } from "express";
import animalRouter from "../routes/animal.router.js";
import { adoptionRouter } from "../routes/adoption.router.js";

const globalRouter = Router();

export default globalRouter;

globalRouter.use("/animals", animalRouter);
globalRouter.use("/adoptions", adoptionRouter);
