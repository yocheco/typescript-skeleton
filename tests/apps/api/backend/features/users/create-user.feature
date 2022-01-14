Feature: Create new user

    Scenario: A valid no existing user
        Given I send a PUT request to "/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
        """
        {
            "name": "Sergio",
            "email": "sergio@demo.com",
            "password": "123456"
        }
        """
        Then the response status code should be 201
        And the response should be empty