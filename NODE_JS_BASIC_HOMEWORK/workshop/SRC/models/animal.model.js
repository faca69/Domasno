import { Schema, model } from "mongoose";
import { types } from "../schemas/animal.schema.js";
import { statuses } from "../schemas/animal.schema.js";

const animalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: types,
    },

    breed: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: statuses,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Animal = model("animal", animalSchema);

export default Animal;
