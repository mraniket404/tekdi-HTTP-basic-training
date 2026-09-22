const express = require("express");

const app = express();
const PORT = 5011;

// ------------------------------------
// 200 OK
// ------------------------------------
app.get("/success", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Request successful",
  });
});

// ------------------------------------
// 201 Created
// ------------------------------------
app.post("/created", (req, res) => {
  res.status(201).json({
    status: 201,
    message: "Resource created successfully",
  });
});

// ------------------------------------
// 204 No Content
// ------------------------------------
app.get("/no-content", (req, res) => {
  res.status(204).send();
});

// ------------------------------------
// 301 Moved Permanently
// ------------------------------------
app.get("/redirect", (req, res) => {
  res.redirect(301, "/success");
});

// ------------------------------------
// 400 Bad Request
// ------------------------------------
app.get("/bad-request", (req, res) => {
  res.status(400).json({
    status: 400,
    message: "Bad request",
  });
});

// ------------------------------------
// 401 Unauthorized
// ------------------------------------
app.get("/unauthorized", (req, res) => {
  res.status(401).json({
    status: 401,
    message: "Authentication required",
  });
});

// ------------------------------------
// 403 Forbidden
// ------------------------------------
app.get("/forbidden", (req, res) => {
  res.status(403).json({
    status: 403,
    message: "Access forbidden",
  });
});

// ------------------------------------
// 404 Not Found
// ------------------------------------
app.get("/not-found", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Resource not found",
  });
});

// ------------------------------------
// 405 Method Not Allowed
// ------------------------------------
app.all("/method-not-allowed", (req, res) => {
  res.status(405).json({
    status: 405,
    message: "HTTP method is not allowed for this resource",
  });
});

// ------------------------------------
// 500 Internal Server Error
// ------------------------------------
app.get("/server-error", (req, res) => {
  res.status(500).json({
    status: 500,
    message: "Internal server error",
  });
});

// ------------------------------------
// 503 Service Unavailable
// ------------------------------------
app.get("/service-unavailable", (req, res) => {
  res.status(503).json({
    status: 503,
    message: "Service temporarily unavailable",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});