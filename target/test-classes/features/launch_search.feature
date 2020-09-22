
Feature: launch and seearch
  
  Scenario: launch
    Given launch url
    When refreshpage
    Then validate page

Scenario: search
    Given launch url
    When entertext in searchbox
    Then validate search results

