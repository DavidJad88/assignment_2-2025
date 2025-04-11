import BaseMedicine from "./baseMedicine";

class IngestionMedicine {
  constructor(
    name,
    manufacturer,
    expirationDate,
    quantity,
    symptoms,
    administrationMethod,
    pillsPerPacket
  ) {
    super(
      name,
      manufacturer,
      expirationDate,
      quantity,
      symptoms,
      administrationMethod
    );
    this.pillsPerPacket = pillsPerPacket;
  }
}

export default IngestionMedicine;
