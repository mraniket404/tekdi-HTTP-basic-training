const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to read JSON request body
app.use(express.json());

// -----------------------------
// 1. Path Parameter
// -----------------------------
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    type: "Path Parameter",
    userId: userId,
    message: `User ID received: ${userId}`,
  });
});

// -----------------------------
// 2. Query Parameters
// -----------------------------
app.get("/products", (req, res) => {
  const { category, limit } = req.query;

  res.json({
    type: "Query Parameters",
    category: category || "all",
    limit: limit || "not specified",
  });
});

// -----------------------------
// 3. Headers
// -----------------------------
app.get("/headers", (req, res) => {
  const userAgent = req.headers["user-agent"];

  res.json({
    type: "HTTP Header",
    userAgent: userAgent,
  });
});

// -----------------------------
// 4. Request Body
// -----------------------------
app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    type: "Request Body",
    message: "User data received successfully",
    data: user,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});