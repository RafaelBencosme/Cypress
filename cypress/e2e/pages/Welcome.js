class Welcome {

  get title() {
    return cy.get("#title-welcome-back");
  };

  logOut() {
    cy.get("#sign-out").click();
  };

}

export default Welcome;