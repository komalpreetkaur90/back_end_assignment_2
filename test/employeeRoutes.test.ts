import request from "supertest";
import app from "../src/app";

describe("Employee API Endpoints", () => {
    it("should create a new employee", async () => {
        const newEmployee = {
            name: "Test Employee",
            position: "Test Position",
            department: "Test Department",
            email: "test@example.com",
            phone: "555-1234",
            branchId: 1
        };

        const response = await request(app)
            .post("/api/v1/employees")
            .send(newEmployee);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Employee created");
    });

    it("should return all employees", async () => {
        const response = await request(app).get("/api/v1/employees");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Get all employees");
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should return employee by ID", async () => {
        const response = await request(app).get("/api/v1/employees/1");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Employee found");
    });

    it("should update an employee", async () => {
        const response = await request(app)
            .put("/api/v1/employees/1")
            .send({ position: "Updated Position" });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Employee updated");
    });

    it("should delete an employee", async () => {
        const response = await request(app).delete("/api/v1/employees/1");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Employee deleted");
    });
});