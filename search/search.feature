Feature: Search data in website 
    As a valid user
    I want to search in website
    Scenario: Sucess Searching
        Given I Search content in searchbox website
        When I typing keyword in searchbox
        Then I found the keywords I was looking for

