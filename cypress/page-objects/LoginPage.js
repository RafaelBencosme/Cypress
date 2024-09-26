class LoginPage {
  get title() {
    return cy.get("#title-login");
  };

  get invalidCredentials() {
    return cy.get(".MuiAlert-message");
  };

  signIn = (username, password) => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#sign-in").click();
  };
}
export default LoginPage;
