import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import DlcLocationPage from "../PageObject/DLC_WP_DLC_Locations_Page";
import { TestUtil } from "../Test_Utilities/Test_Utilities";

//Page Object Instances
const dlcLocationPageActions = new DlcLocationPage();

//Test Utils Instances
const testUtilitiesActions = new TestUtil();

Given("I navigate to the {string} url", (url) => {
  cy.visit(url);
});

When("I confirm {string} is in the address field", (targetUrlValue) => {
  testUtilitiesActions.checkUrl(targetUrlValue);
});

When("I expected the page heading to be {string}", (pageHeadingValue) => {
  dlcLocationPageActions.verifyPageHeader(pageHeadingValue);
});

When(
  "I verify all locations and addresses listed for each {string}",
  (state) => {
    dlcLocationPageActions.clickStateLocationButton(state);
    testUtilitiesActions.verifyLocations(state);
  }
);

When("I confirm {string} button is labled {string}", (state, buttonLable) => {
  testUtilitiesActions.verifyButtonLables(state, buttonLable);
});
