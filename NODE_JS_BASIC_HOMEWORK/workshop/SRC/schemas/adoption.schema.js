import joi from "joi";

const adopterSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  animal: joi.string().required(),
});

export default adopterSchema;
