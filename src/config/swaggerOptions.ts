import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API Documentation",
      version: "1.0.0",
      description: "This is the API documentation for the Task Management application.",
    },
    servers: [
      { url: "http://localhost:3000/api/v1", description: "Local server" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        Employee: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            position: { type: "string" },
          },
          required: ["name", "email", "position"],
        },
        EmployeeUpdate: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            position: { type: "string" },
          },
        },
        Branch: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
          },
          required: ["name", "address"],
        },
        BranchUpdate: {
          type: "object",
          properties: {
            name: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["src/api/v1/routes/*.ts", "src/api/v1/validation/*.ts"], // Only routes are needed for swagger-jsdoc
};

export const generateSwaggerSpec = () => swaggerJsdoc(swaggerOptions);
