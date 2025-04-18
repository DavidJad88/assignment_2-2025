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

  static renderMedicines() {
    const medicineList = document.querySelector(".inventory-list");
    medicineList.innerHTML = "";

    const medicineCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );

    medicineCollection.forEach((medicine) => {
      //creating elements

      //card
      const medicineCard = document.createElement("li");
      medicineCard.classList.add("list-item");

      //category container
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");

      const categoryIconContainer = document.createElement("div");
      categoryIconContainer.classList.add("category__icon-container");

      const categoryIcon = document.createElement("i");
      if (medicine.administrationMethod === "ingestion") {
        categoryIcon.classList.add("fa-solid");
        categoryIcon.classList.add("fa-pills");
      } else if (medicine.administrationMethod === "injection") {
        categoryIcon.classList.add("fa-solid");
        categoryIcon.classList.add("fa-syringe");
        categoryIcon.classList.add("fa-flip-horizontal");
      } else if (medicine.administrationMethod === "topical") {
        categoryIcon.classList.add("fa-solid fa-droplet");
        categoryIcon.classList.add("fa-droplet");
      }

      const categoryToolsContainer = document.createElement("div");
      categoryToolsContainer.classList.add("category__tools-container");

      const editButton = document.createElement("button");
      editButton.classList.add("edit-button");

      const editButtonIcon = document.createElement("i");
      editButtonIcon.classList.add("fa-solid");
      editButtonIcon.classList.add("fa-pencil");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");

      const deleteButtonIcon = document.createElement("i");
      deleteButtonIcon.classList.add("fa-solid");
      deleteButtonIcon.classList.add("fa-trash-can");

      const informationContainer = document.createElement("div");
      informationContainer.classList.add("information-container");

      //description container
      const descriptionContainer = document.createElement("div");
      descriptionContainer.classList.add("description-container");

      const nameContainer = document.createElement("div");
      nameContainer.classList.add("list-iten__subcontainer");
      const nameHeading = document.createElement("h3");
      nameHeading.textContent = "Medicine Name: ";
      const nameDescription = document.createElement("p");
      nameDescription.textContent = medicine.name;

      const manufacturerContainer = document.createElement("div");
      manufacturerContainer.classList.add("list-iten__subcontainer");
      const manufacturerHeading = document.createElement("h3");
      manufacturerHeading.textContent = "Manufacturer:";
      const manufacturerDescription = document.createElement("p");
      manufacturerDescription.textContent = medicine.manufacturer;

      const expirationDateContainer = document.createElement("div");
      expirationDateContainer.classList.add("list-iten__subcontainer");
      const expirationDateHeading = document.createElement("h3");
      expirationDateHeading.textContent = "Expiration Date:";
      const expirationDateDescription = document.createElement("p");
      expirationDateDescription.textContent = medicine.expirationDate;

      const quantityContainer = document.createElement("div");
      quantityContainer.classList.add("list-iten__subcontainer");
      const quantityHeading = document.createElement("h3");
      quantityHeading.textContent = "Amount in Stock:";
      const quantityDescription = document.createElement("p");
      quantityDescription.textContent = medicine.quantity;

      //dosage container
      const dosagesContainer = document.createElement("div");
      dosagesContainer.classList.add("dosages-container");

      const administrationContainer = document.createElement("div");
      administrationContainer.classList.add("list-iten__subcontainer");
      const administrationHeading = document.createElement("h3");
      administrationHeading.textContent = "Method of Administration";
      const administrationDescription = document.createElement("p");
      administrationDescription.textContent = medicine.administrationMethod;

      const symptomsContainer = document.createElement("div");
      symptomsContainer.classList.add("list-iten__subcontainer");
      const symptomsHeading = document.createElement("h3");
      symptomsHeading.textContent = "Treats symptoms:";
      symptomsContainer.append(symptomsHeading);
      medicine.symptoms.forEach((symptom) => {
        const symptomDescription = document.createElement("p");
        symptomDescription.textContent = symptom;
        symptomsContainer.append(symptomDescription);
      });

      const packetContainer = document.createElement("div");
      packetContainer.classList.add("list-iten__subcontainer");
      if (medicine.mlsPerPacket) {
        const packetHeading = document.createElement("h3");
        packetHeading.textContent = "Ml Per Container:";
        const packetDescription = document.createElement("p");
        packetDescription.textContent = `${medicine.mlsPerPacket} ml per container`;
        packetContainer.append(packetHeading, packetDescription);
      } else if (medicine.pillsPerPacket) {
        const packetHeading = document.createElement("h3");
        packetHeading.textContent = "Pills Per Packet:";
        const packetDescription = document.createElement("p");
        packetDescription.textContent = `${medicine.pillsPerPacket} pills per packet`;
        packetContainer.append(packetHeading, packetDescription);
      }

      //appending elements
      medicineList.append(medicineCard);
      medicineCard.append(categoryContainer, informationContainer);

      informationContainer.append(descriptionContainer, dosagesContainer);

      categoryContainer.append(categoryIconContainer, categoryToolsContainer);
      categoryIconContainer.append(categoryIcon);
      categoryToolsContainer.append(editButton, deleteButton);

      editButton.append(editButtonIcon);
      deleteButton.append(deleteButtonIcon);

      descriptionContainer.append(
        nameContainer,
        manufacturerContainer,
        expirationDateContainer,
        quantityContainer
      );

      nameContainer.append(nameHeading, nameDescription);
      manufacturerContainer.append(
        manufacturerHeading,
        manufacturerDescription
      );
      expirationDateContainer.append(
        expirationDateHeading,
        expirationDateDescription
      );
      quantityContainer.append(quantityHeading, quantityDescription);

      dosagesContainer.append(
        administrationContainer,
        symptomsContainer,
        packetContainer
      );

      administrationContainer.append(
        administrationHeading,
        administrationDescription
      );

      editButton.addEventListener("click", () => {
        Ui.displayEditModal();
        Ui.populateEditForm(medicine.id);
      });
      deleteButton.addEventListener("click", () => {
        Ui.displayDeleteModal();
      });
    });
  }
}

export default Ui;
