const licenseObj = require("./licenses.json");
// function to generate markdown for README
function generateMarkdown(data) {
  const year = new Date().getFullYear();
  console.log(year);
  const badge = licenseObj[data.license[0]].badge;
  let licenseText = licenseObj[data.license[0]].licenseText; 
  licenseText = licenseText.replace("<YEAR>", year);
  
  return `# ${data.title}

${badge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseText}

## Contributing

## Tests

## Questions





`;

}

module.exports = generateMarkdown;

