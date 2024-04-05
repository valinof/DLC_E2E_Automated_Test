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
