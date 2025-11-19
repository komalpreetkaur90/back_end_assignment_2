import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *         - address
 *       properties:
 *         id:
 *           type: string
 *           description: Unique ID of the branch
 *         name:
 *           type: string
 *           description: Name of the branch
 *           example: "Downtown Branch"
 *         address:
 *           type: string
 *           description: Physical address
 *           example: "123 Main St"
 *         phone:
 *           type: string
 *           description: Contact phone number
 *           example: "555-1234"
 */
export const branchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(5).max(255).required(),
  phone: Joi.string(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     BranchUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the branch
 *         address:
 *           type: string
 *           description: Physical address
 *         phone:
 *           type: string
 *           description: Contact phone number
 */
export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  address: Joi.string().min(5).max(255),
  phone: Joi.string(),
});