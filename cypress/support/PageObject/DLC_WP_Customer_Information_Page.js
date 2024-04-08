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
    cellPhoneNumberField: () => cy.get("#input_4_21"),
    addressField: () => cy.get("#input_4_25"),
    cityField: () => cy.get("#input_4_26"),
    stateDropdownField: () => cy.get("#input_4_27"),
    zipCodeField: () => cy.get("#input_4_28"),
    mailingAddressMatchCheckBox: () => cy.get("#choice_4_29_1"),
    mailInAddressField: () => cy.get("#input_4_30"),
    mailInCity: () => cy.get("#input_4_31"),
    mailInState: () => cy.get("#input_4_33"),
    mailInZipCode: () => cy.get("#input_4_32"),
    noMilitaryServiceRb: () => cy.get("#choice_4_34_1"),
    yesMilitaryserviceRb: () => cy.get("#choice_4_34_0"),
    incomeEmploymentSection: () => cy.get("#field_4_56"),
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

  enterTestCellPhoneNumber() {
    const testCellNumber = testUtil.generateRandomCellphoneNumber();
    this.elements.cellPhoneNumberField().type(testCellNumber);
  }

  enterAddress(addressValue) {
    this.elements.addressField().type(addressValue);
  }

  enterCity(cityValue) {
    this.elements.cityField().type(cityValue);
  }
  selectState(stateValue) {
    this.elements.stateDropdownField().select(stateValue);
  }
  enterZipCode(zipCodeValue) {
    this.elements.zipCodeField().type(zipCodeValue);
  }

  setMailingAddressMatch() {
    this.elements.mailingAddressMatchCheckBox().click();
  }

  verifyMailingAddressMatch(
    mailAddressValue,
    mailCityValue,
    mailStateValue,
    mailZipCodeValue
  ) {
    this.elements.mailInAddressField().should("have.value", mailAddressValue);
    this.elements.mailInCity().should("have.value", mailCityValue);
    this.elements.mailInState().should("have.value", mailStateValue);
    this.elements.mailInZipCode().should("have.value", mailZipCodeValue);
  }

  selectMilitaryStatus(militaryStatus) {
    militaryStatus = militaryStatus.toLowerCase();
    if (militaryStatus === "no") {
      this.elements.noMilitaryServiceRb().click();
    } else if (militaryStatus === "yes") {
      this.elements.yesMilitaryserviceRb().click();
    } else {
      console.log(
        "You entered " + militaryStatus + " value must be 'yes' or 'no'."
      );
    }
  }

  expandLoanApplicationSection(sectionName) {
    if (sectionName === "Income & Employment Info") {
      this.elements.incomeEmploymentSection().click();
    } else {
      console.log("Invalid section. Check your test again.");
    }
  }
}

export { CustomerInfoEntryPage };
