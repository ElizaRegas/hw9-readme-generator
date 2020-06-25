const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "fullName",
    message: "Enter your first and last name:"
  }
  {
    type: "input",
    name: "title",
    message: "Enter your project name:"
  },
  // description
  {
    type: "input",
    name: "description",
    message: "Enter your project description:"
  },
  // installation
  {
    type: "input",
    name: "installation",
    message: "Enter your installation instructions:"
  },
  // usage
  {
    type: "input",
    name: "usage",
    message: "Enter your usage instructions:"
  },
  // license
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license type:",
    choices: [
      "MIT",
      "ISC"
    ]
  },
  // contributing
  {
    type: "input",
    name: "credits",
    message: "Enter your contribution guidelines:"
  },
  // tests
  {
    type: "input",
    name: "testing",
    message: "Enter testing instructions"
  }
  //questions
];

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// function to write README file
function writeToFile(fileName, data) {
  // use fs package
  fs.writeFile("./readmeFiles/" + fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const markDown = generateMarkdown(data);
    writeToFile("README.md", markDown);
  });
}

// function call to initialize program
init();
