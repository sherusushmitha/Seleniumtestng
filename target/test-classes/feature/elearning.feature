
Feature: Elearning login page
Background: Backgroung section
Given User is on homepage

    #Scenario: Login with unauthorized user
    #Given User is on homepage
    #When user enter invalid credentials
    #And user click on submit button
    #Then validation message appears
    
    @Regression @smoke @sushma
    Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and Password "<password>"
    Then validation message appears
    
    Examples: 
    | username | password  |
    | sushma   | 123456    |
    
    #| manu     | s345      |
    #| susma    | jh234567  |
    
    @Regression
    Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and Password "<password>"
    Then validation message appears
    
    Examples: 
    | username | password  |
    | sushma   | 123456    |
    | manu     | s345      |
    | susma    | jh234567  |   
    
    
     
      Scenario:  Verify the page
    When user enter value in user name field
    And user enter value in password field
    Then Login button enabled
    
    
       
    
     #Scenario: Login with valid credentials
    #Given User is on homepage
    #When user enter valid credentials
    #And user click on submit button
    #Then user navigates to home page
