import joi from "joi";

export const postSchema = joi.object({
  title: joi.string().min(1).max(30).required(),
  content: joi.string().min(1).max(150).required(),
});
