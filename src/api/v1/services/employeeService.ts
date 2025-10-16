import * as repository from "../repositories/repository";
import { Employee } from "../models/employee";

const COLLECTION = "employees";

export const getAllEmployees = async (): Promise<Employee[]> => {
  return await repository.getDocuments<Employee>(COLLECTION);
};

export const getEmployeeById = async (id: string): Promise<Employee | null> => {
  return await repository.getDocumentById<Employee>(COLLECTION, id);
};

export const createEmployee = async (employee: Employee) => {
  try {
    const plainEmployee = { ...employee };
    return await repository.addDocument<Employee>("employees", plainEmployee);
  } catch (err) {
    console.error("Error creating employee:", err);
    throw err;
  }
};

export const updateEmployee = async (id: string, employee: Partial<Employee>): Promise<void> => {
  await repository.updateDocument<Employee>(COLLECTION, id, employee);
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await repository.deleteDocument(COLLECTION, id);
};

export const getEmployeesByBranch = async (branchId: string): Promise<Employee[]> => {
  try {
    return await repository.queryDocuments<Employee>(COLLECTION, "branchId", branchId);
  } catch (err) {
    console.error("Error fetching employees by branch:", err);
    throw err;
  }
};

export const getEmployeesByDepartment = async (department: string): Promise<Employee[]> => {
  try {
    return await repository.queryDocuments<Employee>(COLLECTION, "department", department);
  } catch (err) {
    console.error("Error fetching employees by department:", err);
    throw err;
  }
};