import Joi from "joi";
import express, { Router } from "express";
const router: Router = express.Router();

/**
 * Branch schema for OpenAPI
 *
 * @openapi
 * Branch:
 *   type: object
 *   required:
 *     - name
 *     - address
 *   properties:
 *     id:
 *       type: string
 *       description: Unique ID of the branch
 *     name:
 *       type: string
 *       description: Name of the branch
 *       example: "Downtown Branch"
 *     address:
 *       type: string
 *       description: Physical address
 *       example: "123 Main St"
 *     phone:
 *       type: string
 *       description: Contact phone number
 *       example: "555-1234"
 */
export const branchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(5).max(255).required(),
  phone: Joi.string(),
});

/**
 * Branch update schema for OpenAPI
 *
 * @openapi
 * BranchUpdate:
 *   type: object
 *   properties:
 *     name:
 *       type: string
 *       description: Name of the branch
 *     address:
 *       type: string
 *       description: Physical address
 *     phone:
 *       type: string
 *       description: Contact phone number
 */
export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  address: Joi.string().min(5).max(255),
  phone: Joi.string(),
});

export default router;





