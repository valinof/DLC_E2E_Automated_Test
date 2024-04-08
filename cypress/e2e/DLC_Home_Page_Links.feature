Feature: Links on the Home Page

  Tests all links navigate to the expected pages

  Background: Go to don't be broke website
    Given I navigate to the "https://dlccorp.wpenginepowered.com/" url


  Scenario Outline: Navigate State Links
    Given I click '<state>' link
    And I confirm '<state>' button is labled '<buttonLable>'
    And I confirm '<target_url>' is in the address field
    Then I expected the page heading to be '<pageHeading>'

    #Confirm Footer state links to to the right page - Correct target URL and Page Heading
    Examples:
      | state     | target_url                                     | pageHeading   | buttonLable      |
      | Nevada    | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See NV Locations |
      | Utah      | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See UT Locations |
      | Idaho     | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See ID Locations |
      | Wisconsin | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | Apply Online     |
      | Oklahoma  | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | Apply Online     |


  Scenario Outline: Confirm Location and Addresses for Nevada, Utah and Idaho
    Given I click '<state>' link
    And I confirm '<target_url>' is in the address field
    Then I verify all locations and addresses listed for each '<state>'

    #Confirm state locations and addresses for Nevada, Utah and Idado after clicking see locations button
    Examples:
      | state  | target_url                                     | pageHeading   | buttonLable      |
      | Nevada | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See NV Locations |
      | Utah   | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See UT Locations |
      | Idaho  | https://dlccorp.wpenginepowered.com/locations/ | DLC Locations | See ID Locations |

  Scenario Outline: Addition Links - Verify Correct Navigation
    And I confirm correct navigation of all '<links>' listed under Additional Links
    And I confirm '<url>' is in the address field
    And I expected the page heading to be '<title>'

    Examples:
      | links                                | url                                                                      | title                                              |
      | Additional Disclaimer                | https://dlccorp.wpenginepowered.com/additional-disclaimers/              | Additional Disclaimers                             |
      | Compliance Policy                    | https://dlccorp.wpenginepowered.com/compliance-policy/                   | Compliance Policy                                  |
      | Terms & Conditions                   | https://dlccorp.wpenginepowered.com/terms-and-conditions/                | Terms And Conditions                               |
      | Mobile Terms & Condition             | https://dlccorp.wpenginepowered.com/mobile-terms-and-conditions/         | Mobile Terms and Conditions                        |
      | Privacy Policy                       | https://dlccorp.wpenginepowered.com/privacy-rights-policy/               | Privacy Policy                                     |
      | Privacy Rights                       | https://dlccorp.wpenginepowered.com/notice-of-privacy-rights/            | Notice of Privacy Rights                           |
      | Privacy Rights Califorinia Residents | https://dlccorp.wpenginepowered.com/privacy-notice-california-residents/ | Privacy Notice for California Residents            |
      | Do Not Sell My Personal Information  | https://dlccorp.wpenginepowered.com/data-request-ccpa/                   | Do Not Sell My Personal Information (CA Consumers) |
      | DLC Locations                        | https://dlccorp.wpenginepowered.com/locations/                           | DLC Locations                                      |
      | Blog                                 | https://dlccorp.wpenginepowered.com/blog/                                | the don’t be broke blog                            |
      | Press                                | https://dlccorp.wpenginepowered.com/press/                               | Press                                              |
      | Contact Us                           | https://dlccorp.wpenginepowered.com/contact-us/                          | Where to Send Letters                              |
      | Fraud Alert                          | https://dlccorp.wpenginepowered.com/security-center/                     | Fraud Alert                                        |
      | State Licenses                       | https://dlccorp.wpenginepowered.com/licenses/                            | State Licenses                                     |
      | Work At DLC                          | https://dlccorp.wpenginepowered.com/jobsbylocation/                      | Jobs by Location                                   |


