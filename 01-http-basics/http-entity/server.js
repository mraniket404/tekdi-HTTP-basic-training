const express = require("express");

const app = express();
const PORT = 5005;

// Middleware to read JSON request entity/body
app.use(express.json());

// ------------------------------------
// Request Entity
// ------------------------------------
app.post("/users", (req, res) => {
  const userData = req.body;

  console.log("Request Entity:");
  console.log(userData);

  res.status(201).json({
    message: "Request entity received successfully",
    receivedData: userData,
  });
});

// ------------------------------------
// Response Entity
// ------------------------------------
app.get("/user", (req, res) => {
  const user = {
    id: 101,
    name: "Aniket",
    course: "B.Tech CSE",
  };

  res.status(200).json(user);
});

// ------------------------------------
// Text Entity
// ------------------------------------
app.get("/message", (req, res) => {
  res
    .status(200)
    .type("text")
    .send("This is a text entity sent by the server.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});