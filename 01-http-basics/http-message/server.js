const express = require("express");

const app = express();
const PORT = 5002;

// Middleware to read JSON body
app.use(express.json());

// HTTP Request Message
app.get("/inspect", (req, res) => {
  const requestMessage = {
    method: req.method,
    url: req.url,
    httpVersion: req.httpVersion,
    headers: req.headers,
  };

  res.json({
    message: "HTTP Request Message received",
    request: requestMessage,
  });
});

// HTTP Request + Response Body
app.post("/users", (req, res) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);

  res.status(201).json({
    message: "HTTP Response Message sent",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});