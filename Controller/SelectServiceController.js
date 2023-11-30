import { selectServices } from "../data/ServicesData.js";

export async function getServices() {
  return await selectServices();
}

export async function getServiceById(serviceId) {
  const services = await selectServices();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    throw Error("Servicio no encontrado");
  }
  return service;
}
