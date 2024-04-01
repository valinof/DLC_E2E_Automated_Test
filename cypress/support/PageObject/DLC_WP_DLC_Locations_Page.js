class DlcLocationPage {
  elements = {
    pageHeader: () => cy.get(".section-title"),
  };

  verifyPageHeader(pageHeaderValue) {
    this.elements.pageHeader().should("contain", pageHeaderValue);
  }

  clickStateLocationButton(state) {
    let n = 0;
    if (state === "Nevada") {
      n = 1;
    } else if (state === "Utah") {
      n = 2;
    } else if (state === "Idaho") {
      cy.get("li:nth-of-type(3) > .button.yellow").scrollIntoView().click();
      return; // Exit the function since Idaho doesn't require selecting a state button
    } else {
      console.log(state + " is not a valid state input.");
      return; // Exit the function if the state is not valid
    }

    if (n === 0) {
      console.log("No state button found for this state.");
      return; // Exit the function if n is 0
    }

    const stateButton = cy.get(`ul > :nth-child(${n}) > .button`);
    stateButton.click();
  }
}

module.exports = DlcLocationPage;
