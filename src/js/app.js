//imports

import Ui from "./ui";

//calling elements

//ui elements
const openAddModalbutton = document.querySelector(".add-medicine-button");
const closeAddModalButton = document.querySelector(".close-form-button");
const formModal = document.querySelector(".form-modal");
const administrationContainer = document.querySelector(
  ".form-administration-container"
);

const formIngestionContainer = document.querySelector(
  ".administration--ingestion"
);
const formInjectionTopicalContainer = document.querySelector(
  "administration--injection-topical"
);

//form & input elements

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
console.log(medicineSymptomsCheckboxes);

const medicineAdministrationRadios = document.querySelectorAll(
  'input[name="administration"]'
);
console.log(medicineAdministrationRadios);

//dynamic form fields

//ml fields
const mlPerContainer = document.querySelector(
  ".injection-or-topical-quantities"
);

//amount per packet fields
const amountPerPacket = document.querySelector(".ingestion-quantities-input");

//submit and verification elements
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
});
