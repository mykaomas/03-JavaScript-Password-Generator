# 03-JavaScript-Password-Generator

Modify starter code to create an application that enables employees to generate random passwords based on their input into the application

## Motivation

My motivation for building this project was to put into practice the JavaScript skills, I had acquired during my third week of class. Being able to add JavaScript to an application creates a more interactive user experience. Being able to implement interactivity means the user can have a task done simply, easily and effectively without much effort because a developer has taken the time to understand user limitations and abilities. 

When I started the project, I realized rather quickly that it was essential to write out the necessary steps that needed to be done to meet the Acceptance Criteria before writing any code. Writing out lists and then creating steps that needed to be done within that list helped me to organize my thought and better understand what was being asked. 

During this project I faced several challenges. I spent a number of hours researching how to verify user input was a number and if it wasn't a number to reprompt the user to make a valid entry. In that search I came across several diffent explainations on how this could be done. Every method I used to implement the verification of a number safeguard my while loop would continue to run even when the user input met criteria. After seeking assistance from my tutor Brandon Rose, I found that I was on the right track but some of the code needed was out of my scope of coding. I also faced the challenge of jumping in betwen task and not following a logical order which lead me to trying to figure out where I left off; what code was completed; what code wasn't and in turn, I was overwhelmed with the process.

## General Information

The Acceptence Criteria has been met:

* The 'generate password' button displays a series of prompts for the password criteria and is displayed to the user:

    *length of password
    *special character
    *uppercase letter
    *lowercase letter
    *number

* The user selects the appropriate length of 8-128 and the subsequent types of characters to include in the password

* If conditions are not met the user is prompted to reenter the required information before being able to proceed

* A password is generated based on the user's answers to the preceding questions and is displayed on the page

* Console logs were added to track the input of the user on the backend to follow the process and to catch errors  

### Below I've added the User Story and Acceptance Criteria for the assignment:

#### User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

#### Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## The condtions of the assignmtent have been met