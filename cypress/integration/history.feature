Feature: History to do
      I want to see the elements history
Scenario: Seeing a history page
      Given I add or delete a todo element 
      When I click on the history button 
      Then I see the order of the actions taken



