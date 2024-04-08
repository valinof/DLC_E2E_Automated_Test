Feature: Loan Application on WP version of frontend

  These tests exercise various scnenarios of applying for a loan through the DLC Wordpress frontend

  Scenario Outline: Apply Base Path
    Given I am testing on a Macbook 16
    And I navigate to the "https://dlccorp.wpenginepowered.com/" url
    And I click the Click to Apply Now button
    When the Online Loan Application page is displayed
    And I confirm loan amount value as '<loanAmount>'
    And I enter an email address to setup my account to test '<testScenario>'
    And I create a password 'Test123Test'
    And I click the Create an account button
    And I am presented with the We'll need a little info page
    And I type test firstname
    And I type test lastname
    And I type test date of birth
    And I type test SSN
    And I type test cellphone number
    And I type my Address '<streetAddressValue>'
    And I type my City '<cityValue>'
    And I select my state from the dropdown '<stateValue>'
    And I type my Zip Code '<zipValue>'
    And I check the Mailing address matches above checkbox
    And I confirm '<streetAddressValue>''<cityValue>''<stateValue>''<zipValue>'
    And I select the '<military>' radiobutton for military status
    And I complete Section 1 of the loan application
    # And I click on Section 2
    And I type my Monthly Income "3500"
    And I select my Payroll Type "Direct Deposit"
    And I select my Income Type "Employment"
    And I type "Tester" as my occupation
    And I type "Software Testing Inc" as my employer
    And I type "03/03/1999" as my hire date
    And I type "312-588-2300" as my employer's phone number
    And I type "221B Baker Street" as my employer's address
    And I type '<cityValue>' as my employer's city
    And I select employer '<stateValue>'
    And I select my Pay Frequency '<payFrequency>'
    And I type "1834" as my estimated monthly bills
    # And I click on the Authorization & Signature section heading
    # And I select the Yes radiobutton for Reporting Authorization
    # And I select the Yes radiobutton to acklowledge lender's right of denial of service
    # And I select the Yes radiobutton regarding the Notice of Financial Privacy Rights and Esignature
    # And I select the Instant Funding to Your Debit Card radiobutton as my preferred funding option
    # And I type "Testauto Testmation" into the signature field
    # And I click the Submit Application button
    #create an assertion on page title
    # And I am presented with the Bank Verification page
    # And I check the Terms of Service agreement checkbox
    # And I click on the Skip this step button
    # And
    ###as of 3/5/2024 it doesn't seem to connect to the bank yet to complete the process.
    ###I'll add the new steps to this workflow once that component is integrated.

    Examples:
      | testScenario    | loanAmount | streetAddressValue | cityValue | stateValue | zipValue | military | payFrequency |
      | Apply_Base_Path | default    | 99 Test Street     | Reno      | NV         | 89501    | no       | Bi-weekly    |