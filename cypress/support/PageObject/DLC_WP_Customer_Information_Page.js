import { TestUtil } from "../Test_Utilities/Test_Utilities";

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

  enterTestFirstName() {
    const testFirstName = testUtil.generateRandomFirstName();
    this.elements.custInfoFirstNameField().type("Test" + testFirstName);
  }

  enterTestLastName() {
    const testLastName = testUtil.generateRandomLastName();
    this.elements.custInfoLastNameField().type("Test" + testLastName);
  }

  enterTestDob() {
    const dateOfBirth = testUtil.generateRandomDob();
    this.elements.dobField().type(dateOfBirth);
  }

  enterTestSsn() {
    const testSsn = testUtil.generateRandomSSN();
    this.elements.ssnField().type(testSsn);
  }
}

export { CustomerInfoEntryPage };
