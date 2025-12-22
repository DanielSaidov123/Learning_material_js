import express from "express";

const app = express();


//req.params + req.body
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  res.send({ id, name });
});
//PUT /users/3 =  קריאה   
//{"name": "New Name"}  = קריאה  
//זה גם זה וגם זה שולחים




// הפעלת השרת
function startServer(port = 3000) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

// קריאה להפעלה
startServer();


//npm install express
//npm init -y
//npm i nodemon