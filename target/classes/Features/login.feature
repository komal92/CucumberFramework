Feature: Free Login Feature

#Scenario Outline is used for data parameterization

  Scenario Outline: Free Login Test Scenario
    Given user is already on Books Page
    When user clicks on Login button
    Then user enters "<username>" and "<password>"
    When user clicks on Login button
    And user verifies the successful login with "<username>"
    #Then Close the browser

    Examples: 
      | username | password     |
      | Komal92  | Komal@10492# |
      | test123  | wrongpwd     |
