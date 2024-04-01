const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../PageObject/DLC_WP_Home_Page";

const homePageAction = new HomePage();

Given("I click {string} link", (locationValue) => {
  homePageAction.clickLocationLink(locationValue);
});
