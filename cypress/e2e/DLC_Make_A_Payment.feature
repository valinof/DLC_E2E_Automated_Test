Feature: Make a payment on a mobile device


  Scenario: Make a payment for less than amount due on iPhone
    Given I am testing on a "samsung-s10"
    And I navigate to the "https://www.dontbebroke.com" url
    When I log in as username "kent1234" and password "kent1234"
    Then I Make A payment of "40"



#