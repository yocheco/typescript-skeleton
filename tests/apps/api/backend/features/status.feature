Feature: Api status

Scenario: Check the api status
    Given I send a GET request to "/status"
    Then the response status code should be 200