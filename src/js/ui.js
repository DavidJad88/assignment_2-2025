class Ui {
  static currentEditId = null;

  static toggleAdministrationTypeFields(
    administrationContainer,
    formIngestionContainer,
    formInjectionTopicalContainer,
    selectedRadio,
    mlPerContainer,
    pillsPerPacket
  ) {
    administrationContainer.style.display = "block";

    mlPerContainer.value = "";
    pillsPerPacket.valie = "";

    if (selectedRadio === "injection" || selectedRadio === "topical") {
      pillsPerPacket.value = "";
      formIngestionContainer.style.display = "none";
      formInjectionTopicalContainer.style.display = "block";
    } else if (selectedRadio === "ingestion") {
      mlPerContainer.value = "";
      formInjectionTopicalContainer.style.display = "none";
      formIngestionContainer.style.display = "block";
    }
  }

  static displayAddModal(
    openAddModalbutton,
    formModal,

    administrationContainer,
    formIngestionContainer,
    formInjectionTopicalContainer,
    formSubmitButton
  ) {
    openAddModalbutton.addEventListener("click", () => {
      formModal.classList.add("form-modal--display");
      administrationContainer.style.display = "none";
      formIngestionContainer.style.display = "none";
      formInjectionTopicalContainer.style.display = "none";
      formSubmitButton.textcontent = "Add Medicine";
    });
  }

  static closeAddModal(
    closeAddModalButton,
    formModal,
    form,
    formSubmitButton,
    formValidationMessage
  ) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("form-modal--display");
      form.reset();
      formValidationMessage.style.display = "none";
      Ui.currentEditId = null;
      formSubmitButton.textContent = "Add Medicine";
    });
  }

  static closeDeleteModal() {
    const deleteModal = document.querySelector(".delete-modal");
    const cancelDeleteButton = document.querySelector(".cancel-delete-button");
    cancelDeleteButton.addEventListener("click", () => {
      deleteModal.classList.remove("delete-modal--display");
    });
  }
}

export default Ui;
