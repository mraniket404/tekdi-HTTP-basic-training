const express = require("express");

const app = express();
const PORT = 5006;

// Middleware
app.use(express.json());

// Temporary data
let users = [
  {
    id: 1,
    name: "Aniket",
    email: "aniket@example.com",
  },
  {
    id: 2,
    name: "Sakshi",
    email: "sakshi@example.com",
  },
];

// ------------------------------------
// GET - Read all users
// ------------------------------------
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    users: users,
  });
});

// ------------------------------------
// GET - Read single user
// ------------------------------------
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
});

// ------------------------------------
// POST - Create user
// ------------------------------------
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// ------------------------------------
// PUT - Completely update user
// ------------------------------------
app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const { name, email } = req.body;

  users[userIndex] = {
    id: userId,
    name: name,
    email: email,
  };

  res.status(200).json({
    message: "User updated successfully",
    user: users[userIndex],
  });
});

// ------------------------------------
// PATCH - Partially update user
// ------------------------------------
app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const { name, email } = req.body;

  if (name !== undefined) {
    user.name = name;
  }

  if (email !== undefined) {
    user.email = email;
  }

  res.status(200).json({
    message: "User partially updated successfully",
    user: user,
  });
});

// ------------------------------------
// DELETE - Delete user
// ------------------------------------
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});