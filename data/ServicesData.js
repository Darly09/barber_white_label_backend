const { Service } = require("../model/Service");

async function selectServices() {
  const servicesMock = [
    new Service(
      1,
      "Corte",
      1,
      20,
      "Servicio de corte de pelo",
      "url_de_la_imagen",
      1
    ),

    new Service(
      2,
      "Barba",
      2,
      15.0,
      "Servicio de arreglo de barba",
      "url_de_la_imagen",
      1
    ),
  ];

  return servicesMock;
}

const servicesMock = [
  new Service(1, "Corte", 1, 20, "Servicio de corte de pelo", "url_de_la_imagen", 1),
  new Service(2, "Barba", 2, 15.0, "Servicio de arreglo de barba", "url_de_la_imagen", 1),
];
module.exports = { selectServices, servicesMock };
