Feature: Create new user

    Scenario: A valid no existing user
        Given I send a PUT request to "/users/453ad15d-c666-4e3a-8e2e-61c84a65a271" with body:
        """
        {
            "name": "sergio",
            "email": "sergio@demo.com",
            "password": "123456"
        }
        """
        Then the response status code should be 201
        And the response should be empty
    
    Scenario: An invalid no existing user
        Given I send a PUT request to "/users/aaaaa-453ad15d-c666-4e3a-8e2e-61c84a65a271" with body:
        """
        {
            "name": "sergio",
            "email": "sergio@demo.com",
            "password": "123456"
        }
        """
        Then the response status code should be 422