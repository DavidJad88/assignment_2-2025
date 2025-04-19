import BaseMedicine from "./medicineClasses/baseMedicine";
import InjectionMedicine from "./medicineClasses/injectionMedicine";
import IngestionMedicine from "./medicineClasses/ingestionMedicine";
import TopicalMedicine from "./medicineClasses/topicalMedicine";
import Ui from "./ui";

class MedicineManager {
  static medicineCollection =
    JSON.parse(localStorage.getItem("medicine-collection")) || [];

  static addMedicine(
    name,
    manufacturer,
    expirationDate,
    quantity,
    symptoms,
    administrationMethod,
    mlsPerPacket,
    pillsPerPacket
  ) {
    let medicine;
    if (administrationMethod === "ingestion") {
      medicine = new IngestionMedicine(
        name,
        manufacturer,
        expirationDate,
        quantity,
        symptoms,
        administrationMethod,
        pillsPerPacket
      );
    } else if (administrationMethod === "injection") {
      medicine = new InjectionMedicine(
        name,
        manufacturer,
        expirationDate,
        quantity,
        symptoms,
        administrationMethod,
        mlsPerPacket
      );
    } else if (administrationMethod === "topical") {
      medicine = new TopicalMedicine(
        name,
        manufacturer,
        expirationDate,
        quantity,
        symptoms,
        administrationMethod,
        mlsPerPacket
      );
    }
    MedicineManager.medicineCollection.push(medicine);
    this.storeMedicines(this.medicineCollection);
    console.log(this.medicineCollection);
  }

  static editMedicine(
    id,
    name,
    manufacturer,
    expirationDate,
    quantity,
    symptoms,
    administrationMethod,
    mlsPerContainer,
    pillsPerPacket
  ) {
    const latestCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );

    const medicineIndex = latestCollection.findIndex(
      (medicine) => medicine.id === id
    );

    if (medicineIndex !== -1) {
      const updatedMedicine = {
        id,
        name,
        manufacturer,
        expirationDate,
        quantity,
        symptoms,
        administrationMethod,
      };

      if (administrationMethod === "ingestion") {
        updatedMedicine.pillsPerPacket = pillsPerPacket;
      } else if (
        administrationMethod === "injection" ||
        administrationMethod === "topical"
      ) {
        updatedMedicine.mlsPerContainer = mlsPerContainer;
      }

      latestCollection[medicineIndex] = updatedMedicine;
    }
    MedicineManager.storeMedicines(latestCollection);
  }

  static deleteMedicine(id) {
    MedicineManager.medicineCollection =
      MedicineManager.medicineCollection.filter((medicine) => {
        return medicine.id !== id;
      });
    MedicineManager.storeMedicines(MedicineManager.medicineCollection);
    Ui.renderMedicines();
  }

  static storeMedicines(collection) {
    localStorage.setItem("medicine-collection", JSON.stringify(collection));
  }
}

export default MedicineManager;
