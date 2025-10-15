import express, { Router } from "express";
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} from "../controllers/employeeController";
import { validateRequest } from "../middleware/validateRequest";
import { employeeSchema, updateEmployeeSchema } from "../validation/employeeValidation";

const router: Router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.post("/", validateRequest(employeeSchema), createEmployee);
router.put("/:id", validateRequest(updateEmployeeSchema), updateEmployee);
router.delete("/:id", deleteEmployee);


export default router;