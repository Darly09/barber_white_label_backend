class Service{
  constructor(id, name, category, price, description, img, admin_id){
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.img = img;
    this.admin_id = admin_id;
  }
  
}

module.exports =  {Service}