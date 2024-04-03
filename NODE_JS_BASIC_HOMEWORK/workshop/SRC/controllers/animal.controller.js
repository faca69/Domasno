import animalSchema from "../schemas/animal.schema.js";
import { AnimalService } from "../services/animal.service.js";

export class AnimalController {
  static async getAllAnimals(req, res) {
    try {
      const animals = await AnimalService.getAllAnimals();

      res.json(animals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //
  //

  static async getAnimalById(req, res) {
    try {
      const animalId = req.params.id;

      const animal = await AnimalService.getAnimalById(animalId);
      res.json(animal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createAnimal(req, res) {
    try {
      const animalData = req.body;

      await animalSchema.validateAsync(animalData);

      const newAnimal = await AnimalService.createAnimal(animalData);

      res.json(newAnimal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateAnimal(req, res) {
    try {
      const updateData = req.body;
      await animalSchema.validateAsync(updateData);

      const response = await AnimalService.updateAnimal(
        req.params.id,
        updateData
      );
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAnimal(req, res) {
    try {
      await AnimalService.deleteAnimal(req.params.id);
      res.json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
