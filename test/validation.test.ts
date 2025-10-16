import { employeeSchema } from "../src/api/v1/validation/employeeValidation";
import { branchSchema } from "../src/api/v1/validation/branchValidation";


describe("Employee Validation Schema", () => {
  it("should fail when email is invalid", () => {
    const { error } = employeeSchema.validate({
      name: "Test User",
      position: "Developer",
      email: "not-an-email",
      branchId: 1
    });
    expect(error).toBeDefined();
  });

  it("should pass when all fields are valid", () => {
    const { error } = employeeSchema.validate({
      name: "John Doe",
      position: "Developer",
      email: "john@example.com",
      branchId: 1
    });
    expect(error).toBeUndefined();
  });
});

describe("Branch Validation Schema", () => {
  it("should fail when name is too short", () => {
    const { error } = branchSchema.validate({
      name: "A",
      address: "123 Main Street",
      phone: "555-1234"
    });
    expect(error).toBeDefined();
  });

  it("should pass when all fields are valid", () => {
    const { error } = branchSchema.validate({
      name: "Main Branch",
      address: "123 Main Street",
      phone: "555-1234"
    });
    expect(error).toBeUndefined();
  });
});
