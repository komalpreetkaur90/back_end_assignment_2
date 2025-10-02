import request from "supertest";
import app from "../src/app";

describe("Branch API Endpoints", () => {
    it("should create a new branch", async () => {
        const newBranch = {
            name: "Test Branch",
            address: "123 Test Street, Test City, TC 12345",
            phone: "555-1234"
        };

        const response = await request(app)
            .post("/api/v1/branches")
            .send(newBranch);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Branch created");
    });

    it("should return all branches", async () => {
        const response = await request(app).get("/api/v1/branches");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Get all branches");
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should return branch by ID", async () => {
        const response = await request(app).get("/api/v1/branches/1");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Branch found");
    });

    it("should update a branch", async () => {
        const response = await request(app)
            .put("/api/v1/branches/1")
            .send({ name: "Updated Branch" });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Branch updated");
    });

    it("should delete a branch", async () => {
        const response = await request(app).delete("/api/v1/branches/1");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Branch deleted");
    });
});