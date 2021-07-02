const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("");
const Engineer = require("");
const Intern = require("");
const Manager = require("");

// Array of questions for user input
const employees = [
  {
    type: "input",
    name: "name",
    message: "Enter a team member's name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a team member's name");
        return false;
      }
    },
  },
];
