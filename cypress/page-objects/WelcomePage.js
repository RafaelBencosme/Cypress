class WelcomePage {

  get welcomeText() {
    return cy.get("#title-welcome-back", { timeout: 10000 });
  };

  logout = () => {
    cy.get("#sign-out", { timeout: 10000 }).click();
  };

}

export default WelcomePage;
