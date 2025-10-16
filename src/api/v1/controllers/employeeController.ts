import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";
import { SuccessResponse, ErrorResponse } from "../models/responseModel";
import { Employee } from "../models/employee";

export const getAllEmployees = async (req: Request, res: Response): Promise<void> => {
  try {
    const employees = await employeeService.getAllEmployees();
    const response: SuccessResponse<Employee[]> = {
      message: "Get all employees",
      data: employees,
    };
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ message: err.message } as ErrorResponse);
  }
};

export const getEmployeeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getEmployeeById(id);

    if (!employee) {
      res.status(404).json({ message: "Employee not found" } as ErrorResponse);
      return;
    }

    const response: SuccessResponse<Employee> = {
      message: "Employee found",
      data: employee,
    };
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ message: err.message } as ErrorResponse);
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employeeData = JSON.parse(JSON.stringify(req.body));

    const newEmployee = await employeeService.createEmployee(employeeData);
    res.status(201).json({
      message: "Employee created successfully",
      data: newEmployee,
    });
  } catch (err: any) {
    console.error("Error in createEmployee controller:", err);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
};


export const updateEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const existing = await employeeService.getEmployeeById(id);
    if (!existing) {
      res.status(404).json({ message: "Employee not found" } as ErrorResponse);
      return;
    }

    await employeeService.updateEmployee(id, req.body);
    const response: SuccessResponse<null> = {
      message: "Employee updated",
      data: null,
    };
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ message: err.message } as ErrorResponse);
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await employeeService.deleteEmployee(id);
    const response: SuccessResponse<null> = {
      message: "Employee deleted",
      data: null,
    };
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ message: err.message } as ErrorResponse);
  }
};

