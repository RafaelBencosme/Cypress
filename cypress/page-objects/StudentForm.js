class StudentForm {
  #getBirthDate = () => {
    return cy.get("#\\:r8\\:");
  };

  fill = (firstname, lastname, email, gender, phone, dateOfBirth) => {
    const genders = ['male', 'female', 'other'];
    if (!genders.includes(gender))
      throw Error('Invalid gender. Only male, female or other are allowed.');

    cy.get("#firstName").type(firstname);
    cy.get("#lastName").type(lastname);
    cy.get("#email").type(email);
    cy.get(
      `#gender-${gender} > .MuiButtonBase-root > .PrivateSwitchBase-input`
    ).click();
    cy.get("#phone").type(phone);
    this.#getBirthDate().type(dateOfBirth);
    cy.get(".MuiAutocomplete-endAdornment > .MuiButtonBase-root").click();
    cy.get("#province-autocomplete-option-0").click();
  };

  register = () => {
    cy.get("#register").click();
  };

  get registeredMessage () {
    return cy.contains(/Thanks/i);
  };

  clearBirthDate = () => {
    this.#getBirthDate().clear();
  };

  get warnings() {
    return [
      cy.get("#firstName-helper-text"),
      cy.get("#lastName-helper-text"),
      cy.get("#email-helper-text"),
      cy.get("#phone-helper-text"),
      cy.get("#\\:r8\\:-helper-text"),
      cy.get("#province-provinces-helper-text")
    ]
  }
}

export default StudentForm;
