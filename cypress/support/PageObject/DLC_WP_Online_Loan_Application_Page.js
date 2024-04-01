//const { contains } = require("cypress/types/jquery");

class ApplicationPage {
  elements = {
    applicationPageTitle: () => cy.get(".section-title"),
    loanAmount: () => cy.get(".loan-amount"),
    loanAmountSlider: () => cy.get("#amount-slider"),
    firstTimeEmailField: () => cy.get("input[name='input_137']"),
    firstTimePasswordField: () =>
      cy.get("div:nth-of-type(12)  input[name='input_6']"),
    passwordConfirmationField: () => cy.get("input[name='input_7']"),
    createAccountButton: () =>
      cy.get(".button.gform-theme-button.gform_next_button"),
  };
  checkPageTitle() {
    this.elements
      .applicationPageTitle()
      .should("contain", "Online Loan Application");
  }

  confirmLoanAmount(loanAmountValue) {
    if (loanAmountValue === "default") {
      this.elements.loanAmount().should("contain", "2,000");
      return;
    } else this.elements.loanAmount().should("contain", loanAmountValue);
  }

  setLoanAmount(loanAmountValue) {
    this.elements
      .loanAmountSlider()
      .invoke("val", loanAmountValue)
      .trigger("change");
  }

  enterAccountSetupEmail(emailValue) {
    this.elements.firstTimeEmailField().type(emailValue);
  }

  enterPasswordFirstTime(passwordValue) {
    this.elements.firstTimePasswordField().type(passwordValue);
  }

  confirmPassword(passwordValue) {
    this.elements.passwordConfirmationField().type(passwordValue);
  }

  clickCreateAccountButton() {
    this.elements.createAccountButton().click();
  }
}

module.exports = ApplicationPage;
