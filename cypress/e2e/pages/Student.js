class Student {

  get alerts() {
    return [
      cy.get("#firstName-helper-text"),
      cy.get("#lastName-helper-text"),
      cy.get("#email-helper-text"),
      cy.get("#phone-helper-text"),
      cy.get("#\\:r8\\:-helper-text"),
      cy.get("#province-provinces-helper-text")
    ]
  }

  get toast() {
    return cy.contains("Thanks for");
  };

  fill(firstname, lastname, email, gender, phone, dateOfBirth) {
    const validGender = ['male', 'female', 'other'];

    if (!validGender.includes(gender)) {
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

  register() {
    cy.get("#register").click();
  };

  clearBirthDate = () => {
    cy.get("#\\:r8\\:").clear();
  };

}

export default Student;
