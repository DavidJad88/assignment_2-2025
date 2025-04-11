class Validation {
  static validateForm(formData, formValidationMessage) {
    const errors = [];

    // Field validations
    if (!formData.name) errors.push("Please enter a medicine name");
    if (!formData.manufacturer) errors.push("Please enter a manufacturer name");
    if (!formData.expirationDate)
      errors.push("Please enter an expiration date");
    if (!formData.quantity) errors.push("Please enter a quantity");
    if (formData.symptoms.length === 0)
      errors.push("Please choose at least one symptom");
    if (!formData.administrationMethod)
      errors.push("Please select an administration method");

    // Dynamic field validations
    if (
      formData.administrationMethod === "ingestion" &&
      !formData.pillsPerPacket
    ) {
      errors.push("Please enter pills per packet");
    } else if (
      (formData.administrationMethod === "injection" ||
        formData.administrationMethod === "topical") &&
      !formData.mlsPerContainer
    ) {
      errors.push("Please enter ml per container");
    }

    // Display errors
    if (errors.length > 0) {
      formValidationMessage.textContent = errors.join(", ");
      formValidationMessage.style.display = "block";
      return false;
    }
    formValidationMessage.style.display = "none";
    return true;
  }
}

export default Validation;
