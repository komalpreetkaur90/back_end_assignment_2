import Joi from "joi";

export const branchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(5).max(255).required(),
  phone: Joi.string()
});

export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  address: Joi.string().min(5).max(255),
  phone: Joi.string()
});
