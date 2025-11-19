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

/**
 * @openapi
 * /:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Employee"
 */
router.get("/", getAllEmployees);

/**
 * @openapi
 * /{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Employee"
 */
router.get("/:id", getEmployeeById);

/**
 * @openapi
 * /:
 *   post:
 *     summary: Create new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Employee"
 *     responses:
 *       "201":
 *         description: Created
 */
router.post("/", validateRequest(employeeSchema), createEmployee);

/**
 * @openapi
 * /{id}:
 *   put:
 *     summary: Update employee
 *     tags: [Employees]
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
 *             $ref: "#/components/schemas/EmployeeUpdate"
 *     responses:
 *       "200":
 *         description: Updated
 */
router.put("/:id", validateRequest(updateEmployeeSchema), updateEmployee);

/**
 * @openapi
 * /{id}:
 *   delete:
 *     summary: Delete employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Deleted
 */
router.delete("/:id", deleteEmployee);

export default router;
