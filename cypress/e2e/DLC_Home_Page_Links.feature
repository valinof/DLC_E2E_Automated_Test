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