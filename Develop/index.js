const fs = require("fs");
const inquirer = require("inquirer"); 
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "fullName",
    message: "Enter your FIRST and LAST NAME:"
  },
  // title
  {
    type: "input",
    name: "title",
    message: "Enter your PROJECT TITLE:"
  },
  // description
  {
    type: "input",
    name: "description",
    message: "Enter your PROJECT DESCRIPTION:"
  },
  // installation
  {
    type: "input",
    name: "installation",
    message: "Enter your INSTALLATION INSTRUCTIONS:"
  },
  // usage
  {
    type: "input",
    name: "usage",
    message: "Enter your USAGE INSTRUCTIONS:"
  },
  // license
  {
    type: "checkbox",
    name: "license",
    message: "Choose a LICENSE TYPE:",
    choices: [
      "MIT",
      "ISC"
    ]
  },
  // contributing
  {
    type: "input",
    name: "contributing",
    message: "Enter your GUIDELINES for CONTRIBUTING:"
  },
  // tests
  {
    type: "input",
    name: "testing",
    message: "Enter TESTING INSTRUCTIONS:"
  },
  //questions
  {
    type: "input",
    name: "githubName",
    message: "Enter your GITHUB USERNAME:"
  },
  {
    type: "input",
    name: "email",
    message: "Enter your EMAIL ADDRESS:"
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./readmeFiles/" + fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  console.log("3");
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const markDown = generateMarkdown(data);
    writeToFile("README.md", markDown);
  });
}

// function call to initialize program
init();