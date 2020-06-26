const licenseObj = require("./licenses.json");
// function to generate markdown for README
function generateMarkdown(data) {
  const year = new Date().getFullYear();
  const name = data.fullName;
  const badge = licenseObj[data.license[0]].badge;
  let licenseText = licenseObj[data.license[0]].licenseText; 
  licenseText = licenseText.replace("<YEAR>", year);
  licenseText = licenseText.replace("<OWNER>", name);
  
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

${data.contributing}

## Tests

${data.tests}

## Questions

Github Profile for ${data.fullName}:
https://github.com/${data.githubName}

Feel free to contact me with any questions:
${data.email}

`;
}

module.exports = generateMarkdown;

