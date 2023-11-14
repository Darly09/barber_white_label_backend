const { Product } = require("../Model/Products.js");

const productsMock = [
  new Product(
    1,
    "Máquina de cortar pelo profesional",
    "Wahl",
    "Equipamiento",
    150000,
    "Máquina de cortar pelo profesional con cuchillas de acero inoxidable y batería de larga duración. Ideal para cortes de cabello y barbas.",
    10,
    "Disponible"
  ),

  new Product(
    2,
    "Cera de afeitar",
    "Tocca",
    "Productos de afeitado",
    50000,
    "Cera de afeitar hidratante y protectora que facilita el deslizamiento de la cuchilla y previene las irritaciones.",
    20,
    "Disponible"
  ),

  new Product(
    3,
    "Champú para barba",
    "L'Oréal Men Expert",
    "Productos para la barba",
    30000,
    "Champú para barba que limpia e hidrata la barba, dejándola suave y manejable.",
    30,
    "Disponible"
  ),
];

async function getProductByRef(id) {
  if (id == undefined || id == "" || id == null) {
    throw Error("Id invalido.");
  }

  const product = productsMock.find((product) => product.reference == id);

  if (product === undefined) {
    throw Error("No se encontro el Producto.");
  }
  return product;
}

module.exports = { getProductByRef };
