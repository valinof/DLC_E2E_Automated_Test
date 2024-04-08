Feature: Links on the Home Page

  Tests all links navigate to the expected pages

  Background: Go to don't be broke website
    Given I navigate to the "https://www.dontbebroke.com/" url


  Scenario Outline: Navigate State Links
    Given I click '<state>' link
    And I confirm '<state>' button is labled '<buttonLable>'
    And I confirm '<target_url>' is in the address field
    Then I expected the page heading to be '<pageHeading>'

    #Confirm Footer state links to to the right page - Correct target URL and Page Heading
    Examples:
      | state     | target_url                             | pageHeading   | buttonLable      |
      | Nevada    | https://www.dontbebroke.com/locations/ | DLC Locations | See NV Locations |
      | Utah      | https://www.dontbebroke.com/locations/ | DLC Locations | See UT Locations |
      | Idaho     | https://www.dontbebroke.com/locations/ | DLC Locations | See ID Locations |
      | Wisconsin | https://www.dontbebroke.com/locations/ | DLC Locations | Apply Online     |
      | Oklahoma  | https://www.dontbebroke.com/locations/ | DLC Locations | Apply Online     |


  Scenario Outline: Confirm Location and Addresses for Nevada, Utah and Idaho
    Given I click '<state>' link
    And I confirm '<target_url>' is in the address field
    Then I verify all locations and addresses listed for each '<state>'

    #Confirm state locations and addresses for Nevada, Utah and Idado after clicking see locations button
    Examples:
      | state  | target_url                             | pageHeading   | buttonLable      |
      | Nevada | https://www.dontbebroke.com/locations/ | DLC Locations | See NV Locations |
      | Utah   | https://www.dontbebroke.com/locations/ | DLC Locations | See UT Locations |
      | Idaho  | https://www.dontbebroke.com/locations/ | DLC Locations | See ID Locations |

  Scenario Outline: Addition Links - Verify Correct Navigation
    And I confirm correct navigation of all '<links>' listed under Additional Links
    And I confirm '<url>' is in the address field
    And I expected the page heading to be '<title>'

    Examples:
      | links                                | url                                                              | title                                              |
      | Additional Disclaimer                | https://www.dontbebroke.com/additional-disclaimers/              | Additional Disclaimers                             |
      | Compliance Policy                    | https://www.dontbebroke.com/compliance-policy/                   | Compliance Policy                                  |
      | Terms & Conditions                   | https://www.dontbebroke.com/terms-and-conditions/                | Terms And Conditions                               |
      | Mobile Terms & Condition             | https://www.dontbebroke.com/mobile-terms-and-conditions/         | Mobile Terms and Conditions                        |
      | Privacy Policy                       | https://www.dontbebroke.com/privacy-rights-policy/               | Privacy Policy                                     |
      | Privacy Rights                       | https://www.dontbebroke.com/notice-of-privacy-rights/            | Notice of Privacy Rights                           |
      | Privacy Rights Califorinia Residents | https://www.dontbebroke.com/privacy-notice-california-residents/ | Privacy Notice for California Residents            |
      | Do Not Sell My Personal Information  | https://www.dontbebroke.com/data-request-ccpa/                   | Do Not Sell My Personal Information (CA Consumers) |
      | DLC Locations                        | https://www.dontbebroke.com/locations/                           | DLC Locations                                      |
      | Blog                                 | https://www.dontbebroke.com/blog/                                | the don’t be broke blog                            |
      | Press                                | https://www.dontbebroke.com/press/                               | Press                                              |
      | Contact Us                           | https://www.dontbebroke.com/contact-us/                          | Where to Send Letters                              |
      | Fraud Alert                          | https://www.dontbebroke.com/security-center/                     | Fraud Alert                                        |
      | State Licenses                       | https://www.dontbebroke.com/licenses/                            | State Licenses                                     |
      | Work At DLC                          | https://www.dontbebroke.com/jobsbylocation/                      | Jobs by Location                                   |


