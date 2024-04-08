import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../PageObject/DLC_WP_Home_Page";
import ApplicationPage from "../PageObject/DLC_WP_Online_Loan_Application_Page";
import { CustomerInfoEntryPage } from "../PageObject/DLC_WP_Customer_Information_Page";
import { TestUtil } from "../Test_Utilities/Test_Utilities";

const homePageAction = new HomePage();
const applicationPageAction = new ApplicationPage();
const testUtil = new TestUtil();
const customerInfoEntryPageAction = new CustomerInfoEntryPage();

When("I click the Click to Apply Now button", () => {
  homePageAction.applyNow();
});

When("the Online Loan Application page is displayed", () => {
  applicationPageAction.checkPageTitle();
});

When("I confirm loan amount value as {string}", (loanAmountValue) => {
  applicationPageAction.confirmLoanAmount(loanAmountValue);
});

When(
  "I enter an email address to setup my account to test {string}",
  (testScenario) => {
    const email = testUtil.generateUserId(testScenario);
    applicationPageAction.enterAccountSetupEmail(email);
  }
);

When("I create a password {string}", (password) => {
  applicationPageAction.enterPasswordFirstTime(password);
  applicationPageAction.confirmPassword(password);
});

When("I click the Create an account button", () => {
  applicationPageAction.clickCreateAccountButton();
});

When("I am presented with the We'll need a little info page", () => {
  customerInfoEntryPageAction.checkCustomerInfoPageTitle();
});

When("I type test firstname", () => {
  customerInfoEntryPageAction.enterTestFirstName();
});

When("I type test lastname", () => {
  customerInfoEntryPageAction.enterTestLastName();
});

When("I type test date of birth", () => {
  customerInfoEntryPageAction.enterTestDob();
});

When("I type test SSN", () => {
  customerInfoEntryPageAction.enterTestSsn();
});

When("I type test cellphone number", () => {
  customerInfoEntryPageAction.enterTestCellPhoneNumber();
});

When("I type my Address {string}", (addressValue) => {
  customerInfoEntryPageAction.enterAddress(addressValue);
});

When("I type my City {string}", (cityValue) => {
  customerInfoEntryPageAction.enterCity(cityValue);
});

When("I select my state from the dropdown {string}", (stateValue) => {
  customerInfoEntryPageAction.selectState(stateValue);
});

When("I type my Zip Code {string}", (zipCodeValue) => {
  customerInfoEntryPageAction.enterZipCode(zipCodeValue);
});

When("I check the Mailing address matches above checkbox", () => {
  customerInfoEntryPageAction.setMailingAddressMatch();
});

When(
  "I confirm {string}{string}{string}{string}",
  (addressValue, cityValue, stateValue, zipValue) => {
    customerInfoEntryPageAction.verifyMailingAddressMatch(
      addressValue,
      cityValue,
      stateValue,
      zipValue
    );
  }
);

When(
  "I select the {string} radiobutton for military status",
  (militaryStatus) => {
    customerInfoEntryPageAction.selectMilitaryStatus(militaryStatus);
  }
);

// When("I click on section 2", () => {
//   customerInfoEntryPageAction.
// });

When("I complete Section 1 of the loan application", () => {
  customerInfoEntryPageAction.completeLoanApplySection1();
});

When("I type my Monthly Income {string}", (monthyIncomeValue) => {
  customerInfoEntryPageAction.enterMonthlyIncome(monthyIncomeValue);
});

When("I select my Payroll Type {string}", (paymentTypeValue) => {
  customerInfoEntryPageAction.selectPaymentType(paymentTypeValue);
});

When("I select my Income Type {string}", (incomeTypeValue) => {
  customerInfoEntryPageAction.selectIcomeType(incomeTypeValue);
});

When("I type {string} as my occupation", (occupationValue) => {
  customerInfoEntryPageAction.enterOccupation(occupationValue);
});

When("I type {string} as my employer", (employerNameValue) => {
  customerInfoEntryPageAction.enterEmployerName(employerNameValue);
});

When("I type {string} as my hire date", (hireDateValue) => {
  customerInfoEntryPageAction.enterHireDate(hireDateValue);
});

When("I type {string} as my employer's phone number", (empPhoneNumberValue) => {
  customerInfoEntryPageAction.enterEmployerPhoneNumber(empPhoneNumberValue);
});

When("I type {string} as my employer's address", (employerAddressValue) => {
  customerInfoEntryPageAction.enterEmployerAddress(employerAddressValue);
});

When("I type {string} as my employer's city", (employerCityValue) => {
  customerInfoEntryPageAction.enterEmployerCity(employerCityValue);
});

When("I select employer {string}", (employerStateValue) => {
  customerInfoEntryPageAction.selectEmployerState(employerStateValue);
});

When("I select my Pay Frequency {string}", (payFrequencyValue) => {
  customerInfoEntryPageAction.selectPayFrequency(payFrequencyValue);
});

When("I type {string} as my estimated monthly bill", (estMonthlyBillsValue) => {
  customerInfoEntryPageAction.enterEstMonthlyBills(estMonthlyBillsValue);
});
