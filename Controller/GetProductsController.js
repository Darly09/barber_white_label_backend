async function getProduct() {
  const ProductsMock = [
    {
      reference: "BAR-001",
      name: "Máquina de cortar pelo profesional",
      brand: "Wahl",
      category: "Equipamiento",
      price: 150000,
      description:
        "Máquina de cortar pelo profesional con cuchillas de acero inoxidable y batería de larga duración. Ideal para cortes de cabello y barbas.",
      quantity: 10,
      status: "Disponible",
    },

    {
      reference: "BAR-002",
      name: "Cera de afeitar",
      brand: "Tocca",
      category: "Productos de afeitado",
      price: 50000,
      description:
        "Cera de afeitar hidratante y protectora que facilita el deslizamiento de la cuchilla y previene las irritaciones.",
      quantity: 20,
      status: "Disponible",
    },

    {
      reference: "BAR-003",
      name: "Champú para barba",
      brand: "L'Oréal Men Expert",
      category: "Productos para la barba",
      price: 30000,
      description:
        "Champú para barba que limpia e hidrata la barba, dejándola suave y manejable.",
      quantity: 30,
      status: "Disponible",
    },
  ];
  return ProductsMock;
}

module.exports = { getProduct };
