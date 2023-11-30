export class Product {
  constructor(
    reference,
    name,
    brand,
    category,
    price,
    description,
    quantity,
    status
  ) {
    this.reference = reference;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.status = status;
  }
}
