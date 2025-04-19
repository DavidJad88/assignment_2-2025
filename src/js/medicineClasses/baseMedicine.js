import { v4 as uuidv4 } from "uuid";

class BaseMedicine {
  constructor(
    name,
    manufacturer,
    expirationDate,
    quantity,
    symptoms = [],
    administrationMethod
  ) {
    this.id = uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.expirationDate = new Date(expirationDate).toISOString();
    this.quantity = quantity;
    this.symptoms = symptoms;
    this.administrationMethod = administrationMethod;
  }
}

export default BaseMedicine;
