class Ui {
  static currentEditId = null;

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
}

export default Ui;
