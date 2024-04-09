const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../PageObject/DLC_WP_Home_Page";
import { MemeberAreaPage } from "../PageObject/DLC_WP_Memeber_Area_Page";

const homePageAction = new HomePage();
const membersAreaPageAction = new MemeberAreaPage();

When(
  "I log in as username {string} and password {string}",
  (userName, userPassword) => {
    homePageAction.logIntoMemberArea();
    membersAreaPageAction.userSignin(userName, userPassword);
  }
);
Then("I Make A payment of {string}", (paymentAmount) => {
  membersAreaPageAction.makeAPayment(paymentAmount);
});
