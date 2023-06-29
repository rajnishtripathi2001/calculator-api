const express = require("express");
const app = express();

app.use(express.json());

app.get("/sum", (req, res) => {
  if (req.query.a == null || req.query.b == null) {
    res.status(400).send({ error: "Number is null" });
  }
  var a = Number(req.query.a);
  var b = Number(req.query.b);

  const sum = a + b;

  res.status(200).send({ Sum: sum });
});



app.get("/mul", (req, res) => {
  if (req.query.a == null || req.query.b == null) {
    res.status(400).send({ error: "Number is null" });
  }
  var a = Number(req.query.a);
  var b = Number(req.query.b);

  const mul = a * b;
  res.status(200).send({ Multi: mul });

});

app.get("/sub", (req, res) => {
    if (req.query.a == null || req.query.b == null) {
      res.status(400).send({ error: "Number is null" });
    }
    var a = Number(req.query.a);
    var b = Number(req.query.b);
  
    const sub= a - b;
    res.status(200).send({ Sub: sub });
  });

app.listen(5000, () => {
  console.log("Server Running at port : 5000");
});
