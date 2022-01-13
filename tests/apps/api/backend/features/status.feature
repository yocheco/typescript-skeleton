Feature: Api status

Scenario: Check the api status
    Given I send a GET request to "/status"
    Then The response status code is 200