import { faker } from "@faker-js/faker";

class TestUtil {
  // constructor() {
  //   this.emailStorageKey = "last_generated_email.txt";
  // }
  generateUserId(testScenario) {
    const randomNumber = faker.string.numeric(15);
    let email = "Test" + randomNumber + "Tester@example.com";
    cy.writeFile(
      "test_data_used_during_execution.txt",
      "\n" + email + " " + "Scenario: " + testScenario,
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

  generateRandomLastName() {
    const randomLastName = faker.person.lastName();
    return randomLastName;
  }

  generateRandomDob() {
    const minDate = new Date("1945-01-01"); // Minimum date for birthdate
    const maxDate = new Date("2006-12-30"); // Current date (maximum date for birthdate)

    // Generate a random date of birth between minDate and maxDate
    const randomDob = faker.date.between(minDate, maxDate);

    // Format the date as mm/dd/yyyy
    const month = String(randomDob.getMonth() + 1).padStart(2, "0");
    const day = String(randomDob.getDate()).padStart(2, "0");
    const year = randomDob.getFullYear();

    // Return the formatted date of birth
    return `${month}/${day}/${year}`;
  }

  generateRandomSSN() {
    // Generate random numbers for the last six digits
    const lastSixDigits = faker.number
      .int({ min: 0, max: 999999 })
      .toString()
      .padStart(6, "0");

    // Concatenate '888' with the last six digits to form the SSN
    const ssn = `888-${lastSixDigits}`;
    cy.writeFile("test_data_used_during_execution.txt", " SSN: " + ssn + "\n", {
      flag: "a+",
    });

    return ssn;
  }
  generateRandomCellphoneNumber() {
    // Generate random numbers for the last seven digits
    const lastSevenDigits = faker.number
      .int({ min: 1000000, max: 9999999 })
      .toString();

    // Format the cellphone number with the appropriate country code and area code
    const countryCode = "+1"; // Assuming US country code
    const areaCode = faker.number.int({ min: 200, max: 999 }).toString(); // Assuming random area code
    const phoneNumber = `${areaCode}+${lastSevenDigits}`;

    return phoneNumber;
  }
}

export { TestUtil };
