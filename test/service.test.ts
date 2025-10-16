import { getAllEmployees, createEmployee } from "../src/api/v1/services/employeeService";
import { Employee } from "../src/api/v1/models/employee";

describe("Employee Service", () => {
  it("should create an employee", async () => {
    const employee: Employee = { name: "John Doe", position: "Developer", email: "john@example.com", branchId: 1 };
    const result = await createEmployee(employee);
    expect(result).toHaveProperty("id");
    expect(result.name).toBe("John Doe");
  });

  it("should get all employees", async () => {
    const employees = await getAllEmployees();
    expect(Array.isArray(employees)).toBe(true);
  });
});
