async function getServices() {
    const servicesMock = [{
  id: 1,
  name: 'Corte',
  category: 1, 
  price: 20.,
  description: 'Servicio de corte de pelo',
  img: 'url_de_la_imagen',
  admin_id: 1,
},
{
  id: 2,
  name: 'Barba',
  category: 2, 
  price: 15.0,
  description: 'Servicio de arreglo de barba',
  img: 'url_de_la_imagen',
  admin_id: 1,
},];

return servicesMock
}

module.exports = {getServices}

