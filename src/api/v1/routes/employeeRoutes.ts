import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - email
 *         - branchId
 *       properties:
 *         id:
 *           type: string
 *           description: Unique ID of the employee
 *         name:
 *           type: string
 *           description: Full name of the employee
 *           minLength: 2
 *           maxLength: 100
 *           example: "John Doe"
 *         position:
 *           type: string
 *           description: Job title of the employee
 *           example: "Manager"
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         branchId:
 *           type: integer
 *           description: ID of the branch the employee belongs to
 *           example: 1
 */
export const employeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  position: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  branchId: Joi.number().required(),
}).unknown(true);

/**
 * @openapi
 * components:
 *   schemas:
 *     EmployeeUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         position:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         branchId:
 *           type: integer
 */
export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  position: Joi.string().min(2).max(100),
  email: Joi.string().email(),
  branchId: Joi.number(),
}).unknown(true);
