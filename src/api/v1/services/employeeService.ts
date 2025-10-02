import { employees } from "../../../data/employees";

export const getAllEmployees = () => {
    return [...employees];
};

export const getEmployeeById = (id: number) => {
    return employees.find(emp => emp.id === id);
};

export const createEmployee = (employeeData: any) => {
    const newId = Math.max(...employees.map(emp => emp.id), 0) + 1;
    const newEmployee = {
        id: newId,
        ...employeeData
    };
    employees.push(newEmployee);
    return { ...newEmployee };
};

export const updateEmployee = (id: number, updateData: any) => {
    const index = employees.findIndex(emp => emp.id === id);
    
    if (index === -1) {
        return undefined;
    }

    employees[index] = {
        ...employees[index],
        ...updateData
    };

    return { ...employees[index] };
};

export const deleteEmployee = (id: number) => {
    const index = employees.findIndex(emp => emp.id === id);
    
    if (index === -1) {
        return false;
    }

    employees.splice(index, 1);
    return true;
};

export const getEmployeesByBranch = (branchId: number) => {
    return employees.filter(emp => emp.branchId === branchId);
};