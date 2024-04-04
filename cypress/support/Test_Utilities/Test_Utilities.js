import { faker } from "@faker-js/faker";

class TestUtil {
  // constructor() {
  //   this.emailStorageKey = "last_generated_email.txt";
  // }
  generateUserId(testScenario) {
    const randomNumber = faker.string.numeric(15);
    let email = "Test" + randomNumber + "Tester@example.com";
    cy.writeFile(
      "emails_used_in_testing.txt",
      email + " " + "Test Scenario: " + testScenario + "\n",
      { flag: "a+" }
    );
    return email;
  }

  checkUrl(targetUrl) {
    cy.url().should("include", targetUrl);
  }

  verifyLocations(state) {
    cy.fixture(state.toLowerCase()).then((locations) => {
      locations.locations.forEach((location) => {
        // Assert that the location name exists on the page
        cy.contains(".page-main-container", location.name).should("exist");

        // Iterate over each address for the current location
        location.addresses.forEach((address) => {
          // Assert that each address text exists on the page
          cy.contains(".page-main-container", address).should("exist");
        });
      });
    });
  }

  verifyButtonLables(state, buttonLabel) {
    let n = 0;
    if (state === "Nevada") {
      n = 1;
    } else if (state === "Utah") {
      n = 2;
    } else if (state === "Idaho") {
      console.log("Checking Idaho button label...");
      cy.get("li:nth-of-type(3) > .button.yellow").should(
        "contain",
        buttonLabel
      );
      return; // Exit the function after Cypress command execution
    } else {
      console.log(state + " is not a valid state input.");
      return; // Exit the function if the state is not valid
    }

    // Ensure cy.get() is executed within a test or beforeEach()
    cy.get(`ul > :nth-child(${n}) > .button`).should("contain", buttonLabel);
  }

  generateRandomFirstName() {
    const randomFirstName = faker.person.firstName();
    return randomFirstName;
  }
}

export { TestUtil };
