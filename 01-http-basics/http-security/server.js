const express = require("express");

const app = express();
const PORT = 5009;

app.use(express.json());

// ------------------------------------
// Basic Security Headers
// ------------------------------------
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");

  next();
});

// ------------------------------------
// Public Route
// ------------------------------------
app.get("/", (req, res) => {
  res.json({
    message: "HTTP Security Demo",
    https: "Use HTTPS in production",
  });
});

// ------------------------------------
// Authentication Header Example
// ------------------------------------
app.get("/protected", (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      message: "Authorization header is required",
    });
  }

  const expectedToken = "Bearer demo-token";

  if (authorization !== expectedToken) {
    return res.status(401).json({
      message: "Invalid authorization token",
    });
  }

  res.status(200).json({
    message: "Access granted",
    data: "This is protected data",
  });
});

// ------------------------------------
// Basic Input Validation
// ------------------------------------
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  res.status(201).json({
    message: "User data accepted",
    user: {
      name,
      email,
    },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});