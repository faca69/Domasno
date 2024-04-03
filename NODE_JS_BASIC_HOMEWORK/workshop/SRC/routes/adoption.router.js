import { Router } from "express";
import { AdoptionController } from "../controllers/adoption.controller.js";

export const adoptionRouter = new Router();

adoptionRouter.post("/", AdoptionController.createAdoption);
adoptionRouter.get("/:id", AdoptionController.getAdoptions);
