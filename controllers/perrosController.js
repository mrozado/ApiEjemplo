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

function getPerros(req, res) {
  res.status(200).json(perros);
}

function insertPerro(req, res) {
  perros.push(req.body);
  res.status(200).json(perros);
}

module.exports = { traerPerros: getPerros, insertPerro: insertPerro };
