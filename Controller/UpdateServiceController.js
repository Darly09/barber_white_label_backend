import { selectServices } from "../data/ServicesData.js";

export async function updateService(service, id) {
  const services = await selectServices();
  const serviceIndex = services.findIndex((service) => service.id == id);

  if (
    serviceIndex === -1 ||
    serviceIndex === null ||
    serviceIndex === undefined
  ) {
    throw Error("Servicio no encontrado.");
  }

  services[serviceIndex] = service;

  return services[serviceIndex];
}
