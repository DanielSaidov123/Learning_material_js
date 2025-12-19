import express from "express";

const app = express();

const users = [
  { id: 1, name: "Daniel" },
  { id: 2, name: "Alice" },
];

// פונקציית GET
function getAllUsers(req, res) {
  res.json(users);
}

// חיבור ל-Route
app.get("/users", getAllUsers);

// הפעלת השרת
function startServer(port = 3000) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

// קריאה להפעלה
startServer();


//npm install express
//npm init -y