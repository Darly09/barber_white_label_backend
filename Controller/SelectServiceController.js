// endpoint para consumir un servicio
const { selectServices } = require("../data/ServicesData.js");

async function getServices() {
  return await selectServices();
}

async function getServiceById(serviceId) {
  const services = await selectServices();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    throw Error('Servicio no encontrado');
  }
  return service
}

module.exports = { getServices, getServiceById };
