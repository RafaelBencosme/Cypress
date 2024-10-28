class SideBar {
  selectLogin() {
    cy.get(
      "#menu-login > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    );
  };

  selectStudents() {
    cy.get(
      "#menu-students > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).click();
  };

  selectContact() {
    cy.get(
      "#menu-upload > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    );
  };
}

export default SideBar;