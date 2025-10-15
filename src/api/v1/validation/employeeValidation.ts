import Joi from "joi";

export const employeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  position: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  branchId: Joi.number().required()
}).unknown(true);

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  position: Joi.string().min(2).max(100),
  email: Joi.string().email(),
  branchId: Joi.number()
}).unknown(true);
