const express = require("express");
const app = express();

const perrosController = require("./controllers/perrosController");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hola Mundo");
});

app.get("/perros", perrosController.traerPerros);

app.delete("/perros/:id", function(req, res) {
  perros.pop();
  res.status(200).json(perros);
});

app.post("/perros", perrosController.insertPerro);

app.listen(3030, function() {
  console.log("Running ...");
});
