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
 *         name:
 *           type: string
 *           description: Name of the branch
 *         address:
 *           type: string
 *           description: Physical address of the branch
 *         phone:
 *           type: string
 *           description: Contact phone number of the branch
 */
export const branchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(5).max(255).required(),
  phone: Joi.string()
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
 *           description: Physical address of the branch
 *         phone:
 *           type: string
 *           description: Contact phone number of the branch
 */
export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  address: Joi.string().min(5).max(255),
  phone: Joi.string()
});