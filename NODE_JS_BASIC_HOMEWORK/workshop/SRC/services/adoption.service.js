import Adopter from "../models/adoption.model.js";

export class AdoptionService {
  static getAdoptions(id) {
    return Adopter.findById(id).populate("animal");
  }

  static createAdoption(adopterData) {
    const adoption = new Adopter(adopterData);

    return adoption.save();
  }

  static async toggleAnimal(adopterId, animalId, isAvail) {
    const adopter = await Adopter.findById(adopterId);

    if (!adopter) {
      throw new Error("Adopter not found");
    }

    if (isAvail === "adopted") {
      throw new Error("alr adopted");
    }

    const animalIndex = adopter.animal.findIndex(
      (animal) => animal.toString() === animalId
    );

    if (animalIndex === -1) {
      adopter.animal.push(animalId);
    } else {
      adopter.animal.splice(animalIndex, 1);
    }

    return adopter.save();
  }
}
