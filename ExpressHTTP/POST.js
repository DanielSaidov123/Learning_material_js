import express from "express";

const app = express();

//req.body
app.post('/users', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send({ name, age });
});
//{ "name": "Daniel","age": 20}  = קריאה  




// הפעלת השרת
function startServer(port = 3000) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

// קריאה להפעלה
startServer();


//npm install express
//npm init -y
//npm i nodemon
