const express = require("express");

const app = express();
const PORT = 5003;

// Middleware to read JSON request body
app.use(express.json());

// GET Request
app.get("/users", (req, res) => {
  res.json({
    method: req.method,
    url: req.url,
    message: "GET request received successfully",
  });
});

// GET Request with Path Parameter
app.get("/users/:id", (req, res) => {
  res.json({
    method: req.method,
    url: req.url,
    userId: req.params.id,
    message: "User request received successfully",
  });
});

// POST Request
app.post("/users", (req, res) => {
  res.status(201).json({
    method: req.method,
    url: req.url,
    body: req.body,
    message: "POST request received successfully",
  });
});

// PUT Request
app.put("/users/:id", (req, res) => {
  res.json({
    method: req.method,
    url: req.url,
    userId: req.params.id,
    body: req.body,
    message: "PUT request received successfully",
  });
});

// DELETE Request
app.delete("/users/:id", (req, res) => {
  res.json({
    method: req.method,
    url: req.url,
    userId: req.params.id,
    message: "DELETE request received successfully",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});