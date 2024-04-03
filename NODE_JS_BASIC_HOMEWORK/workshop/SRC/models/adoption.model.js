import { Schema, model } from "mongoose";

const adopterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    animal: [
      {
        type: Schema.Types.ObjectId,
        ref: "animal",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Adopter = model("adoption", adopterSchema);

export default Adopter;
