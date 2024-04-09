class MemeberAreaPage {
  elements = {
    makeAPaymentButton: () =>
      cy.get(
        "div[id='loan-info-payment'] a[class='make-payment membership-btn-secondary']"
      ),
    continueButton: () => cy.get(".membership-btn.continue-warning"),
    proceedToCardDetailsButton: () => cy.get("#make-payment"),
    userNameEmailSignInField: () => cy.get("#input_6_1"),
    userPasswordSignInField: () => cy.get("#input_6_3"),
    signInButton: () => cy.get("#gform_submit_button_6"),
    customAmountRadioButton: () => cy.get("#choice_13_1_2"),
    customAmountField: () => cy.get("#input_13_3"),
  };

  userSignin(userNameValue, userPasswordValue) {
    this.elements.userNameEmailSignInField().type(userNameValue);
    this.elements.userPasswordSignInField().type(userPasswordValue);
    this.elements.signInButton().click();
  }

  makeAPayment(paymentAmount) {
    this.elements.makeAPaymentButton().click();
    this.elements.continueButton().click();
    this.elements.proceedToCardDetailsButton().should("not.be.enabled");
    this.elements.customAmountRadioButton().click();
    this.elements.proceedToCardDetailsButton().should("not.be.enabled");
    this.elements.customAmountField().type(paymentAmount);
    this.elements.proceedToCardDetailsButton().should("be.enabled");
  }
}
export { MemeberAreaPage };
