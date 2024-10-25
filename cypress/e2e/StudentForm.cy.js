class StudentForm {
  Fill = (firstname, lastname, email, gender, phone, dateOfBirth) => {
    const validGender = ['male', 'female', 'other'];

    if (!validGender.includes(gender)){
      throw new Error("Invalid gender provided. It should be 'male', 'female', or 'other'.");
    }

    cy.get("#firstName").type(firstname);
    cy.get("#lastName").type(lastname);
    cy.get("#email").type(email);
    cy.get(`#gender-${gender} > .MuiButtonBase-root > .PrivateSwitchBase-input`).click();
    cy.get("#phone").type(phone);
    cy.get("#\\:r8\\:").type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
};

  register = () => {
    return cy.get("#register").click();
  };

  getRegisteredText = () => {
    return cy.contains("Thanks for");
  };

  birthDateClear = () => {
    cy.get("#\\:r8\\:").clear();
  };

  getInvalidFirstName = () => {
    return cy.get("#firstName-helper-text");
  };

  getInvalidLastName = () => {
    return cy.get("#lastName-helper-text");
  };

  getInvalidEmail = () => {
    return cy.get("#email-helper-text");
  };

  getInvalidPhone = () => {
    return cy.get("#phone-helper-text");
  };

  getInvalidBirthDate = () => {
    return cy.get("#\\:r8\\:-helper-text");
  };

  getInvalidProvince = () => {
    return cy.get("#province-provinces-helper-text");
  };
}

export default StudentForm;
