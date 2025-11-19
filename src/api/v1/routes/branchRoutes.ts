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
 * /:
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
 * /{id}:
 *   get:
 *     summary: Get a branch by ID
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
 * /:
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
 * /{id}:
 *   put:
 *     summary: Update an existing branch
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
 * /{id}:
 *   delete:
 *     summary: Delete a branch
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
