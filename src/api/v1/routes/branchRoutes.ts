import express, { Router } from "express";
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../controllers/branchController";
import { validateRequest } from "../middleware/validateRequest";
import { branchSchema, updateBranchSchema } from "../validation/branchValidation";

const router: Router = express.Router();

/**
 * @openapi
 * /api/v1/branches:
 *   get:
 *     summary: Get all branches
 *     tags: [Branches]
 *     responses:
 *       "200":
 *         description: List of all branches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Branch"
 */
router.get("/", getAllBranches);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   get:
 *     summary: Get branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Branch found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Branch"
 */
router.get("/:id", getBranchById);

/**
 * @openapi
 * /api/v1/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Branch"
 *     responses:
 *       "201":
 *         description: Branch created
 */
router.post("/", validateRequest(branchSchema), createBranch);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   put:
 *     summary: Update branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/BranchUpdate"
 *     responses:
 *       "200":
 *         description: Branch updated
 */
router.put("/:id", validateRequest(updateBranchSchema), updateBranch);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   delete:
 *     summary: Delete branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Branch deleted
 */
router.delete("/:id", deleteBranch);

export default router;
