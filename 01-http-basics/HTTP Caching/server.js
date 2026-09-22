const express = require("express");

const app = express();
const PORT = 5007;

// ------------------------------------
// Cache-Control Example
// ------------------------------------
app.get("/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=60");

  res.json({
    message: "This response can be cached",
    timestamp: new Date().toISOString(),
  });
});

// ------------------------------------
// ETag Example
// ------------------------------------
app.get("/user", (req, res) => {
  const user = {
    id: 101,
    name: "Aniket",
    course: "B.Tech CSE",
  };

  // Set ETag manually
  res.set("ETag", '"user-101-v1"');

  // Check client's If-None-Match header
  if (req.headers["if-none-match"] === '"user-101-v1"') {
    return res.status(304).end();
  }

  res.json(user);
});

// ------------------------------------
// No Cache Example
// ------------------------------------
app.get("/no-cache", (req, res) => {
  res.set("Cache-Control", "no-store");

  res.json({
    message: "This response should not be stored in cache",
    timestamp: new Date().toISOString(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});