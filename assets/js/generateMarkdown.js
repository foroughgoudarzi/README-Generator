// Includes badge.js file
const fb = require("./badge");

// Function to generate markdown for README
function generateMarkdown(data) {

  // Extracts the license badge from the map
  const badge = fb.licenseBadge.get(data.license);

  // Creates the "Table of Contents" section of the README 
  const tableOfContents = `## Table of Contents\n\n` +
    `[Description](#description)\n\n` +
    `[Usage](#usage)\n\n` +
    `[Installation](#installation)\n\n` +
    `[Contributing](#contributing)\n\n` +
    `[Tests](#tests)\n\n` +
    `[License](#license)\n\n` +
    `[Question](#question)\n\n`;

  // Creates the contents of the README  
  const fileContent = `# ${data.title}\n\n` +
    `${badge}\n\n` +
    `${data.contents ? tableOfContents : ""}` +
    `## Description\n\n` +
    `${data.description}\n\n` +
    `## Usage\n\n` +
    `${data.usage}\n\n` +
    `## Installation\n\n` +
    `${data.installation}\n\n` +
    `## Contributing\n\n` +
    `${data.contributing}\n\n` +
    `## Tests\n\n` +
    `${data.tests}\n\n` +
    `## License\n\n` +
    `This application is covered under the ${data.license}.\n\n` +
    `## Question\n\n` +
    `${data.email}\n\n${data.instruction}`;

   return fileContent;
}

// Exports generateMarkdown method
exports.generateMarkdown = generateMarkdown;
