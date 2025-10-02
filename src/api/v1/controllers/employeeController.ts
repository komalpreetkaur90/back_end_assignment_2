import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export const getAllEmployees = (req: Request, res: Response): void => {
    const employees = employeeService.getAllEmployees();
    res.status(200).json({ message: "Get all employees", data: employees });
};

export const getEmployeeById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const employee = employeeService.getEmployeeById(id);
    
    if (employee) {
        res.status(200).json({ message: "Employee found", data: employee });
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
};

export const createEmployee = (req: Request, res: Response): void => {
    try {
        const newEmployee = req.body;
    
    if (!newEmployee.name || !newEmployee.position || !newEmployee.department || !newEmployee.email || !newEmployee.phone || !newEmployee.branchId) {
            res.status(400).json({ message: "All fields are required: name, position, department, email, phone, branchId" });
            return;
        }
        
    
    const createdEmployee = employeeService.createEmployee(newEmployee);
        res.status(201).json({ message: "Employee created", data: createdEmployee });
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({ message: "Error creating employee" });
    }
};

export const updateEmployee = (req: Request, res: Response): void => {
    try {
        const id = Number(req.params.id);
        const updatedEmployee = req.body;
        const result = employeeService.updateEmployee(id, updatedEmployee);
        
        if (result) {
            res.status(200).json({ message: "Employee updated", data: result });
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" });
    }
};

export const deleteEmployee = (req: Request, res: Response): void => {
    try {
        const id = Number(req.params.id);
        const result = employeeService.deleteEmployee(id);
        
        if (result) {
            res.status(200).json({ message: "Employee deleted" });
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" });
    }
};

export const getEmployeesByBranch = (req: Request, res: Response): void => {
    try {
        const branchId = Number(req.params.branchId);
        const employees = employeeService.getEmployeesByBranch(branchId);
        res.status(200).json({ message: "Employees by branch", data: employees });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving employees by branch" });
    }
};