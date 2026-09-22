const express = require("express");

const app = express();
const PORT = 5001;

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Working of Web</h1>
    <p>Request received successfully from the browser.</p>
  `);
});

// User route
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "Request received successfully",
    userId: userId,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});