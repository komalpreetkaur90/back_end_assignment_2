import Joi from "joi";

export const employeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  position: Joi.string().min(2).max(100).required(),
  department: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(15).required(),
  branchId: Joi.number().required()
});

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  position: Joi.string().min(2).max(100),
  department: Joi.string().min(2).max(100), 
  email: Joi.string().email(),
  phone: Joi.string().min(7).max(15), 
  branchId: Joi.number()
});
