import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

import HomePage from "../PageObject/DLC_WP_Home_Page";
import ApplicationPage from "../PageObject/DLC_WP_Online_Loan_Application_Page";
import TestUtil from "../Test_Utilities/Test_Utilities";

const homePageAction = new HomePage();
const applicationPageAction = new ApplicationPage();
const testUtil = new TestUtil();

When("I click the Click to Apply Now button", () => {
  homePageAction.applyNow();
});

When("the Online Loan Application page is displayed", () => {
  applicationPageAction.checkPageTitle();
});

When("I confirm loan amount value as {string}", (loanAmountValue) => {
  applicationPageAction.confirmLoanAmount(loanAmountValue);
});

When("I enter an email address to setup my account", () => {
  const randomNumber = faker.string.numeric(15);
  let email = "Test" + randomNumber + ".Tester@example.com";
  applicationPageAction.enterAccountSetupEmail(email);
});

When("I create a password {string}", (password) => {
  applicationPageAction.enterPasswordFirstTime(password);
  applicationPageAction.confirmPassword(password);
});

When("I click the Create an account button", () => {});
