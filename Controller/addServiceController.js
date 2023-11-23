const { servicesMock } = require("../data/ServicesData.js");


function addService(newServiceData) {
  
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

module.exports = { addService };
