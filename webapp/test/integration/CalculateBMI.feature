Feature: Calculating Body Mass Index
  As a health specialist
  I want a BMI Calculator
  So that I can calculate patient's Body Mass Index

  Background:
    Given I start my App

  Scenario Outline: Calculate Body Mass Index
    When on the calculate page: I enter <HEIGHT> as height
    And I enter <WEIGHT> as weight
    And I press the Calculate button
    Then on the calculate page: I should see <BMI> as bmi and <CATEGORY> as category
 
  Examples:
    |HEIGHT |WEIGHT |BMI |CATEGORY   |
    |170    |50     |17.3|Underweight|
    |181    |80     |24.4|Normal     |
    |180    |90     |27.8|Overweight |
    |175    |100    |32.7|Obese      |