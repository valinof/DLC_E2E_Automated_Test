import TestUtil from "../Test_Utilities/Test_Utilities";

const testUtil = new TestUtil();

class CustomerInfoEntryPage {
  elements = {
    weNeedInfoTitle: () =>
      cy.get("[data-js-reload='field_4_19'] .loan-apply-account-title"),
    custInfoFirstNameField: () => cy.get("#input_4_13"),
    custInfoLastNameField: () => cy.get("#input_4_15"),
    dobField: () => cy.get("#input_4_17"),
    ssnField: () => cy.get("#input_4_18"),
  };
  checkCustomerInfoPageTitle() {
    this.elements
      .weNeedInfoTitle()
      .should("contain", "we’ll need a little info");
  }

  enterTestFirstName(testFirstName) {
    this.elements.custInfoFirstNameField().type("Test" + testFirstName);
  }
}

export { CustomerInfoEntryPage };
