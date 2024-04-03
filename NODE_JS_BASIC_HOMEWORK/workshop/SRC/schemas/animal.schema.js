import joi from "joi";

export const types = ["dog", "cat"];
export const statuses = ["available", "adopted"];

const animalSchema = joi.object({
  name: joi.string().required(),
  type: joi
    .string()
    .required()
    .valid(...types),

  breed: joi.string().required(),

  age: joi.number().required(),

  status: joi
    .string()
    .required()
    .valid(...statuses),

  description: joi.string(),
});

export default animalSchema;
