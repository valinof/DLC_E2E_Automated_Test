class HomePage {
  elements = {
    //Buttons
    topApplyNowButton: () =>
      cy.get("section:nth-of-type(2) > div > a:nth-of-type(1)"),
    topMembersAreaButton: () => cy.get("div > a:nth-of-type(2)"),
    topLocatinButton: () => cy.get("section:nth-of-type(2)  button"),
    clickToApplyNowButton: () => cy.get(".basic-cta"),

    //Footer Links
    additionalDisclaimerLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(1) > a"),
    compliancePolicyLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(2) > a"),
    termsAndConditionsLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(3) > a"),
    mobileTermsAndConditionsLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(4) > a"),
    privacyPolicyLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(5) > a"),
    privacyRightsLink: () =>
      cy.get(".footer-additional-links-menu > li:nth-of-type(6) > a"),
    privacyRightsCaResLink: () =>
      cy.xpath(
        "//a[normalize-space()='Privacy Notice for California Residents']"
      ),
    doNotSellMyPiLink: () => cy.get("li:nth-of-type(8) > a"),
    dlcLocationLink: () => cy.get("li:nth-of-type(9) > a"),
    blogLink: () => cy.get("li:nth-of-type(10) > a"),
    pressLink: () => cy.get("li:nth-of-type(11) > a"),
    workAtDlcLink: () => cy.xpath("//a[normalize-space()='Work at DLC']"),
    contacUsLink: () => cy.get("li:nth-of-type(13) > a"),
    fraudAlertLink: () => cy.get("li:nth-of-type(14) > a"),
    stateLicenseLink: () => cy.get("li:nth-of-type(15) > a"),

    //Recent blog posts links
    coreValuesLink: () =>
      cy.get(".footer-recent-posts > li:nth-of-type(1) > a"),
    safelyNavigateStLoansLink: () =>
      cy.get(".footer-recent-posts > li:nth-of-type(2) > a"),
    unexpectedExpensesLink: () =>
      cy.get(".footer-recent-posts > li:nth-of-type(3) > a"),

    //Locations links
    nevadaLink: () => cy.get(".footer-closing-content > p > a:nth-of-type(1)"),
    utahLink: () => cy.get(".footer-closing-content > p > a:nth-of-type(2)"),
    idahoLink: () => cy.get(".footer-closing-content > p > a:nth-of-type(3)"),
    wisconsinLink: () =>
      cy.get(".footer-closing-content > p > a:nth-of-type(5)"),
    oklahomaLink: () => cy.get("p > :nth-child(5)"),
  };
  applyNow() {
    this.elements.clickToApplyNowButton().click();
  }

  clickLocationLink(location) {
    const locationValue = location;
    if (locationValue === "Nevada") {
      this.elements.nevadaLink().scrollIntoView();
      this.elements.nevadaLink().click();
    } else if (locationValue === "Utah") {
      this.elements.utahLink().click();
    } else if (locationValue === "Idaho") {
      this.elements.idahoLink().click();
    } else if (locationValue === "Wisconsin") {
      this.elements.wisconsinLink().click();
    } else if (locationValue === "Oklahoma") {
      this.elements.oklahomaLink().click();
    } else
      console.log(
        "Invalid state. Check data table. Value is: " + locationValue
      );
  }

  confirmAllAdditionalLinksNavigation(linkName) {
    //Additional Disclaimer link
    if (linkName === "Additional Disclaimer") {
      this.elements.additionalDisclaimerLink().click();
    } else if (linkName === "Compliance Policy") {
      this.elements.compliancePolicyLink().click();
    } else if (linkName === "Terms & Conditions") {
      this.elements.termsAndConditionsLink().click();
    } else if (linkName === "Mobile Terms & Condition") {
      this.elements.mobileTermsAndConditionsLink().click();
    } else if (linkName === "Privacy Policy") {
      this.elements.privacyPolicyLink().click();
    } else if (linkName === "Privacy Rights") {
      this.elements.privacyRightsLink().click();
    } else if (linkName === "Privacy Rights Califorinia Residents") {
      this.elements.privacyRightsCaResLink().click();
    } else if (linkName === "Do Not Sell My Personal Information") {
      this.elements.doNotSellMyPiLink().click();
    } else if (linkName === "DLC Locations") {
      this.elements.dlcLocationLink().click();
    } else if (linkName === "Blog") {
      this.elements.blogLink().click();
    } else if (linkName === "Press") {
      this.elements.pressLink().click();
    } else if (linkName === "Work At DLC") {
      this.elements.workAtDlcLink().focus();
      this.elements.workAtDlcLink().click();
    } else if (linkName === "Contact Us") {
      this.elements.contacUsLink().click();
    } else if (linkName === "Fraud Alert") {
      this.elements.fraudAlertLink().click();
    } else if (linkName === "State Licenses") {
      this.elements.stateLicenseLink().click();
    } else {
      console.log(
        "The link name used " + linkName + " is not a valid link name."
      );
    }
  }

  logIntoMemberArea() {
    this.elements.topMembersAreaButton().click();
  }
}

module.exports = HomePage;
