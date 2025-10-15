import express, { Router } from "express";
import {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
} from "../controllers/branchController";
import { validateRequest } from "../middleware/validateRequest";
import { branchSchema, updateBranchSchema } from "../validation/branchValidation";

const router: Router = express.Router();

router.get("/", getAllBranches);
router.get("/:id", getBranchById);
router.post("/", validateRequest(branchSchema), createBranch);
router.put("/:id", validateRequest(updateBranchSchema), updateBranch);
router.delete("/:id", deleteBranch);

export default router;