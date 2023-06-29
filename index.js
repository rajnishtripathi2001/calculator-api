const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  if (req.query.a == null || req.query.b == null) {
    res.status(400).send({ error: "Number is null" });
  }
  var a = Number(req.query.a);
  var b = Number(req.query.b);
  var name = req.query.name;

  console.log(name);
  const sum = a + b;
  res.status(200).send({ Sum: sum, Name: name });
});

app.listen(5000, () => {
  console.log("Server Running at port : 5000");
});

