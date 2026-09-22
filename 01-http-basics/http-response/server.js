const express = require("express");

const app = express();
const PORT = 5004;

// JSON Response
app.get("/json", (req, res) => {
  res.status(200).json({
    message: "JSON response sent successfully",
    name: "Aniket",
  });
});

// Text Response
app.get("/text", (req, res) => {
  res.status(200).send("Hello! This is an HTTP text response.");
});

// HTML Response
app.get("/html", (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>HTTP Response</title>
      </head>
      <body>
        <h1>HTTP Response Example</h1>
        <p>This HTML was sent by the server.</p>
      </body>
    </html>
  `);
});

// Created Response
app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created successfully",
  });
});

// Not Found Response
app.get("/not-found", (req, res) => {
  res.status(404).json({
    error: "Resource not found",
  });
});

// Server Error Example
app.get("/error", (req, res) => {
  res.status(500).json({
    error: "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});