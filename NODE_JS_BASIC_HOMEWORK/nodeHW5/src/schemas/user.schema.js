import joi from "joi";

export const userSchema = joi.object({
  phone_or_gmail: joi.string().required(),
  name: joi.string().min(3).max(30).required(),
  username: joi.string().min(3).max(30).required(),
  password: joi.string().min(6).required(),
});
