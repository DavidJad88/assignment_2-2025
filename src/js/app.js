//imports

import Ui from "./ui";
import MedicineManager from "./medicineManager";
import Validation from "./validation";

//CALLING ELEMENTS

//UI ELEMENTS
const openAddModalbutton = document.querySelector(".add-medicine-button");
const closeAddModalButton = document.querySelector(".close-form-button");
const formModal = document.querySelector(".form-modal");
const administrationContainer = document.querySelector(
  ".form__administration-container"
);

const formIngestionContainer = document.querySelector(
  ".administration--ingestion"
);
const formInjectionTopicalContainer = document.querySelector(
  ".administration--injection-topical"
);

//FORM & INPUT ELEMENTS

const form = document.querySelector(".form");
const medicineName = document.querySelector(".form__medicine-name-input");
const medicineManufacturer = document.querySelector(
  ".form__manufacturer-input"
);
const medicineExirationDate = document.querySelector(
  ".form__expiration-date-input"
);
const medicineQuantity = document.querySelector(
  ".form__medicine-quantity-input"
);
const medicineSymptomsCheckboxes = document.querySelectorAll(
  'input[name="symptoms"]'
);

const medicineAdministrationRadios = document.querySelectorAll(
  'input[name="administration"]'
);

//DYNAMIC FORM FIELDS

//ML FIELDS
const mlPerContainer = document.querySelector(
  ".injection-or-topical-quantities"
);

//QUANTITY PER PACKET FIELDS
const amountPerPacket = document.querySelector(".ingestion-quantities-input");

//SUBMIT & VERIFICATION ELEMENTS
const formSubmitButton = document.querySelector(".form-submit-button");
const formValidationMessage = document.querySelector(
  ".form__validation-message"
);

//EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(
    openAddModalbutton,
    formModal,
    administrationContainer,
    formIngestionContainer,
    formInjectionTopicalContainer,
    formSubmitButton
  );

  Ui.closeAddModal(
    closeAddModalButton,
    formModal,
    form,
    formSubmitButton,
    formValidationMessage
  );
  Ui.closeDeleteModal();
  Ui.renderMedicines();
});

medicineAdministrationRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedRadio = document.querySelector(
      'input[name="administration"]:checked'
    )?.value;
    Ui.toggleAdministrationTypeFields(
      administrationContainer,
      formIngestionContainer,
      formInjectionTopicalContainer,
      selectedRadio,
      mlPerContainer,
      amountPerPacket
    );
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect data
  const selectedSymptoms = Array.from(medicineSymptomsCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  const selectedAdministration = Array.from(medicineAdministrationRadios).find(
    (radio) => radio.checked
  )?.value;

  // Dynamic fields
  const pillsPerPacket =
    selectedAdministration === "ingestion" ? amountPerPacket.value : null;
  const mlsPerContainer =
    selectedAdministration === "injection" ||
    selectedAdministration === "topical"
      ? mlPerContainer.value
      : null;

  // Form data object
  const formData = {
    name: medicineName.value.trim(),
    manufacturer: medicineManufacturer.value.trim(),
    expirationDate: medicineExirationDate.value,
    quantity: medicineQuantity.value,
    symptoms: selectedSymptoms,
    administrationMethod: selectedAdministration,
    pillsPerPacket: pillsPerPacket,
    mlsPerContainer: mlsPerContainer,
  };

  // Validate
  const isValid = Validation.validateForm(formData, formValidationMessage);

  if (isValid) {
    if (!Ui.currentEditId) {
      MedicineManager.addMedicine(
        formData.name,
        formData.manufacturer,
        formData.expirationDate,
        formData.quantity,
        formData.symptoms,
        formData.administrationMethod,
        formData.mlsPerContainer,
        formData.pillsPerPacket
      );
      formModal.classList.remove("form-modal--display");
    } else {
      MedicineManager.editMedicine(
        Ui.currentEditId,
        formData.name,
        formData.manufacturer,
        formData.expirationDate,
        formData.quantity,
        formData.symptoms,
        formData.administrationMethod,
        formData.mlsPerContainer,
        formData.pillsPerPacket
      );
      Ui.currentEditId = null;
      formModal.classList.remove("form-modal--display");
    }
    Ui.renderMedicines();
    form.reset();
    formSubmitButton.textContent = "Add Medicine";
  }
});
