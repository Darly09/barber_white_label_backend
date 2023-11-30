import { selectServices } from "../data/ServicesData.js";

export async function addService(newServiceData) {
  if (!newServiceData.name || !newServiceData.price) {
    throw new Error("Nombre y precio son campos obligatorios");
  }

  const newService = {
    id: selectServices.length + 1,
    ...newServiceData,
  };

  selectServices.push(newService);

  return newService;
}
