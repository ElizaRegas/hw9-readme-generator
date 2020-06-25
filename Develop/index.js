const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project name:"
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description:"
  },
  // {
  //   type: "confirm",
  //   name: "tableOfContents",
  //   message: "Would you like a table of contents?"
  // }
  {
    type: "input",
    name: "instructions",
    message: "Enter your installation instructions:"
  }
  
  // "Enter your usage instructions:",
  // "Enter your credits:",
  // "Choose a license type:",
  // put in a badge
  // "List your contributors:",
  // "Enter testing instructions:",
];

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
    const markDown = generateMarkdown(data);
    writeToFile("README.md", markDown);
  });
}

// function call to initialize program
init();
