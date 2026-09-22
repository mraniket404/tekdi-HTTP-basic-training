const express = require("express");

const app = express();
const PORT = 5010;

// ------------------------------------
// Content Negotiation using Accept
// ------------------------------------
app.get("/content", (req, res) => {
  const accept = req.headers.accept || "";

  // Client prefers JSON
  if (accept.includes("application/json")) {
    return res.json({
      message: "This response is JSON",
      format: "application/json",
    });
  }

  // Client prefers HTML
  if (accept.includes("text/html")) {
    return res.send(`
      <html>
        <head>
          <title>Content Negotiation</title>
        </head>
        <body>
          <h1>Content Negotiation</h1>
          <p>This response is HTML.</p>
        </body>
      </html>
    `);
  }

  // Client prefers plain text
  if (accept.includes("text/plain")) {
    return res.type("text").send(
      "This response is plain text."
    );
  }

  // Unsupported format
  return res.status(406).json({
    message: "Requested content type is not supported",
  });
});

// ------------------------------------
// Content Negotiation using Language
// ------------------------------------
app.get("/language", (req, res) => {
  const language = req.headers["accept-language"] || "";

  if (language.startsWith("hi")) {
    return res.json({
      language: "Hindi",
      message: "Namaste! Aapka swagat hai.",
    });
  }

  if (language.startsWith("mr")) {
    return res.json({
      language: "Marathi",
      message: "नमस्कार! तुमचे स्वागत आहे.",
    });
  }

  return res.json({
    language: "English",
    message: "Hello! Welcome.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});