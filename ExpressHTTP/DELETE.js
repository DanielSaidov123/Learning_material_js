import express from "express";

const app = express();

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(`deleted ${id}`);
});
//DELETE /users/7 = קריאה




// הפעלת השרת
function startServer(port = 3000) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

// קריאה להפעלה
startServer();


//npm install express
//npm init -y
//npm i nodemon
