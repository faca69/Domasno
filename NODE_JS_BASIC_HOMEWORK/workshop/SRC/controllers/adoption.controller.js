import { AdoptionService } from "../services/adoption.service.js";
import adopterSchema from "../schemas/adoption.schema.js";

export class AdoptionController {
  static async getAdoptions(req, res) {
    try {
      const adopter = await AdoptionService.getAdoptions(req.params.id);

      res.json(adopter);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  static async createAdoption(req, res) {
    try {
      await adopterSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const adoption = await AdoptionService.createAdoption(req.body);

      res.json(adoption);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  static async toggleAnimal(req, res) {
    try {
      const adopterId = req.params.adopterId;
      const movieId = req.params.movieId;
      const isAvail = req.body.status;

      const updatedAdopter = await AdoptionService.toggleAnimal(
        adopterId,
        movieId,
        isAvail
      );

      res.json(updatedAdopter);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}
