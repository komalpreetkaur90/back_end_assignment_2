import express, { Express } from "express";
import morgan from "morgan";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";

// Initialize Express application
const app: Express = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Health check route
app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy");
});

app.use("/api/v1", employeeRoutes);
app.use("/api/v1", branchRoutes);

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
