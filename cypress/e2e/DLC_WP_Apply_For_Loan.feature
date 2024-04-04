Feature: Loan Application on WP version of frontend

  These tests exercise various scnenarios of applying for a loan through the DLC Wordpress frontend

  Scenario: Apply Base Path
    Given I navigate to the "https://dlccorp.wpenginepowered.com/" url
    And I click the Click to Apply Now button
    #create an assertion on page title
    When the Online Loan Application page is displayed
    And I confirm loan amount value as "default"
    And I enter an email address to setup my account to test "Apply Base Path"
    And I create a password 'Tester@123Teste'
    And I click the Create an account button
    #create an assertion on page title
    And I am presented with the We'll need a little info page
    And I type test firstname
# And I type my lastname 'Testmation'
# And I type my date of birth "<dateOfBirthvalue>"
#ssn needs to be unique in Infinity - needs a util
# And I type my SSN "<ssnValue>"
#cellphone number needs to be unique in Infinity - needs a util
# And I type my cellphone number "<cellphoneNumberValue>"
# And I type my Address "21 Jump Street"
# And I type my City "Reno"
# And I select my state from the dropdown "Nevada"
# And I type my Zip Code "89433"
# And I check the Mailing address matches above checkbox
#create an assertion on the field values
# And I confirm all mailing address information matches the values provided in the personal information section
# And I select the "No" radiobutton for military status
# And I click the Income & Employment Info section heading
# And I type my Monthly Income "3500"
# And I select my Payroll Type "Direct Deposit"
# And I select my Income Type "Employment"
# And I type "Tester" as my occupation
# And I type "Software Testing Inc" as my employer
# And I type "03/03/1999" as my hire date
# And I type "312-588-2300" as my employer's phone number
# And I type "221B Baker Street" as my employer's address
# And I type "Reno" as my employer's city
# And I select my Pay Frequency "Bi-weekly"
# And I type "1834" as my estimated monthly bills
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
# And I click the Fast Approval button
###as of 3/5/2024 it doesn't seem to connect to the bank yet to complete the process.
###I'll add the new steps to this workflow once that component is integrated.

