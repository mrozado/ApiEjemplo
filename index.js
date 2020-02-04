const express = require("express");
const app = express();

let perros = [
  {
    id: 1,
    nombre: "Jorgito",
    raza: "Salchicha",
    edad: 1
  },
  { id: 2, nombre: "lucky", raza: "labrador", edad: 2 },
  { id: 3, nombre: "Pepe", raza: "siberiano", edad: 3 }
];

app.get("/", function(req, res) {
  res.send("Hola Mundo");
});

app.get("/perros", function(req, res) {
  res.status(200).json(perros);
});

app.delete("/perros/:id", function(req, res) {
  perros.pop();
  res.status(200).json(perros);
});

app.post("/perros", function(req, res) {
  perros.push({
    id: 4,
    nombre: "Chucho",
    edad: 5,
    raza: "Caniche"
  });

  res.status(200).json(perros);
});

app.listen(3030, function() {
  console.log("Running ...");
});
