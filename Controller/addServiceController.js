import { servicesMock } from "../data/ServicesData.js";

export function addService(newServiceData) {
  if (!newServiceData.name || !newServiceData.price) {
    throw new Error("Nombre y precio son campos obligatorios");
  }

  const newService = {
    id: servicesMock.length + 1,
    ...newServiceData,
  };

  servicesMock.push(newService);

  return newService;
}
