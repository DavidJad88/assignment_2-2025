import BaseMedicine from "./baseMedicine";

class InjectionMedicine extends BaseMedicine {
  constructor(
    name,
    manufacturer,
    expirationDate,
    quantity,
    symptoms,
    administrationMethod,
    mlsPerPacket
  ) {
    super(
      name,
      manufacturer,
      expirationDate,
      quantity,
      symptoms,
      administrationMethod
    );
    this.mlsPerPacket = mlsPerPacket;
  }
}

export default InjectionMedicine;
