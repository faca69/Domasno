import { Router } from "express";
import { AnimalController } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", AnimalController.getAllAnimals);
//
animalRouter.get("/:id", AnimalController.getAnimalById);
//
animalRouter.post("/", AnimalController.createAnimal);
//
animalRouter.put("/:id", AnimalController.updateAnimal);
//
animalRouter.delete("/:id", AnimalController.deleteAnimal);

export default animalRouter;
