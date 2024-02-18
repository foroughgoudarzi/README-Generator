const fb = require("./badge");

// function to generate markdown for README
let generateMarkdown = function generateMarkdown(data) {

  const badge = fb.findBadge(data.license);

  const tableOfContents = `## Table of Contents\n\n` +
    `[Description](#description)\n\n` +
    `[Usage](#usage)\n\n` +
    `[Installation](#installation)\n\n` +
    `[Contributing](#contributing)\n\n` +
    `[Tests](#tests)\n\n` +
    `[License](#license)\n\n` +
    `[Question](#question)\n\n`;

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

exports.generateMarkdown = generateMarkdown;
