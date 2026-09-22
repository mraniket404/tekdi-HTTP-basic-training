const express = require("express");

const app = express();
const PORT = 5008;

// ------------------------------------
// URL Encoding Example
// ------------------------------------
app.get("/search", (req, res) => {
  const searchQuery = req.query.q;

  res.json({
    originalValue: searchQuery,
    message: "URL parameter decoded successfully",
  });
});

// ------------------------------------
// Multiple Encoded Parameters
// ------------------------------------
app.get("/user", (req, res) => {
  const name = req.query.name;
  const city = req.query.city;

  res.json({
    name: name,
    city: city,
    message: "Encoded URL parameters received successfully",
  });
});

// ------------------------------------
// Manual Encoding / Decoding
// ------------------------------------
app.get("/encode", (req, res) => {
  const originalText = "Hello World @ Aniket";

  const encodedText = encodeURIComponent(originalText);
  const decodedText = decodeURIComponent(encodedText);

  res.json({
    original: originalText,
    encoded: encodedText,
    decoded: decodedText,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});