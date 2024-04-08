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
    continueButton1: () =>
      cy.get(
        "form[class='loan-apply-info-step-one-form'] button[type='submit']"
      ),

    section2Form: () => cy.get("#field_4_56"),
    payrollTypeDropdown: () => cy.get("#input_4_60"),

    incomeTypeDropdown: () => cy.get("#input_4_61"),

    paymentFrequencyDropdown: () => cy.get("#input_4_62"),

    occupationField: () => cy.get("#input_4_98"),

    employerNameField: () => cy.get("#input_4_99"),

    hireDateField: () => cy.get("#input_4_100"),

    employerPhoneField: () => cy.get("#input_4_101"),

    employerAddressField: () => cy.get("#input_4_102"),

    employerCityField: () => cy.get("#input_4_102"),

    employerZipField: () => cy.get("#input_4_105"),

    employerStateDropDown: () => cy.get("#input_4_104"),

    payFrequencyDropDown: () => cy.get("#input_4_62"),

    estimatedMonthlyBills: () => cy.get("#input_4_63"),

    section3Form: () => cy.get("#field_4_57"),
    continueButton2: () =>
      cy.get(
        "form[class='loan-apply-info-step-two-form'] button[type='submit']"
      ),
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

  completeLoanApplySection1() {
    this.elements.section2Form().click();
  }

  enterMonthlyIncome(montlyIncomeValue) {
    this.elements.monthyIncomeField().type(montlyIncomeValue);
  }
  selectPaymentType(paymentTypeValue) {
    this.elements.paymentTypeDropDown().select(paymentTypeValue);
  }
  selectIcomeType(incomeTypeValue) {
    this.elements.incomeTypeDropDown().select(incomeTypeValue);
  }

  enterOccupation(occupationValue) {
    this.elements.occupationField().type(occupationValue);
  }

  enterEmployerName(employerNameValue) {
    this.elements.employerNameField().type(employerNameValue);
  }

  enterHireDate(hireDateValue) {
    this.elements.hireDateField().type(hireDateValue);
  }

  enterEmployerPhoneNumber(empPhoneNumberValue) {
    this.elements.employerPhoneField().type(empPhoneNumberValue);
  }

  enterEmployerAddress(employerAddressValue) {
    this.elements.employerAddressField().type(employerAddressValue);
  }
  enterEmployerCity(employerCityValue) {
    this.elements.employerCityField().type(employerCityValue);
  }

  selectPayFrequency(payFrequencyValue) {
    this.elements.payFrequencyDropDown().select(payFrequencyValue);
  }

  selectEmployerState(employerStateValue) {
    this.elements.employerStateDropDown().select(employerStateValue);
  }

  enterEstMonthlyBills(estMonthlyBillsValue) {
    this.elements.estimatedMonthlyBills().type(estMonthlyBillsValue)
  }
}

export { CustomerInfoEntryPage };
