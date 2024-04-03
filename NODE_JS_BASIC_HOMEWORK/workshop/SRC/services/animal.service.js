import Animal from "../models/animal.model.js";

export class AnimalService {
  static getAllAnimals(animalData) {
    return Animal.find(animalData);
  }

  static getAnimalById(animalId) {
    return Animal.findById(animalId);
  }

  static createAnimal(animalData) {
    const animal = new Animal(animalData);

    return animal.save();
  }

  static updateAnimal(animalId, updateData) {
    return Animal.findByIdAndUpdate(animalId, updateData, { new: true });
  }

  static deleteAnimal(animalId) {
    return Animal.findByIdAndDelete(animalId);
  }
}
