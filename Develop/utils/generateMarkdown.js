// function to generate markdown for README
function generateMarkdown(data) {
  console.log("last " + data);
  return `# ${data.title}

## Description

${data.description}
  
`;
}

module.exports = generateMarkdown;
