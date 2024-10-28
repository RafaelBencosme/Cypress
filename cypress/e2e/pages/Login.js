class Login {

  get alert() {
    return cy.get(".MuiAlert-message");
  };
  
  get title() {
    return cy.get("#title-login");
  };

  signIn(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#sign-in").click();
  };

}

export default Login;