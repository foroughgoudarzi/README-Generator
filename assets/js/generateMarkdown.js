// Includes badge.js file
const fb = require("./badge");

// Function to generate markdown for README
function generateMarkdown(data) {

  // Extracts the license badge from the map
  const badge = fb.licenseBadge.get(data.license);

  // Creates the "Table of Contents" section of README 
  const tableOfContents = `## Table of Contents\n\n` +
    `[Description](#description)\n\n` +
    `[Usage](#usage)\n\n` +
    `[Installation](#installation)\n\n` +
    `[Contributing](#contributing)\n\n` +
    `[Tests](#tests)\n\n` +
    `[License](#license)\n\n` +
    `[Question](#question)\n\n`;

  // Creates the content for Question section of README
  var questionSection = "";
  if (data.username.length > 0) {
    questionSection += `The application can be accessed at [https://github.com/${data.username}/](https://github.com/${data.username}/).\n\n`;
  }
  if (data.email.length > 0) {
    questionSection += `For any inquiries, please reach out to ${data.email}. We strive to respond to all queries within five business days.`;
  }

  // Creates the contents of the README  
  const fileContent = `# ${data.title}\n\n` +
    `${badge}\n\n` +
    `${data.contents ? tableOfContents : ""}` +
    `## Description\n\n` +
    `${data.description ? data.description : "N/A"}\n\n` +
    `## Usage\n\n` +
    `${data.usage ? data.usage : "N/A"}\n\n` +
    `## Installation\n\n` +
    `${data.installation ? data.installation : "N/A"}\n\n` +
    `## Contributing\n\n` +
    `${data.contributing ? data.contributing : "N/A"}\n\n` +
    `## Tests\n\n` +
    `${data.tests ? data.tests : "N/A"}\n\n` +
    `## License\n\n` +
    `This application is covered under the ${data.license}.\n\n` +
    `## Question\n\n` +
    `${questionSection.length > 0 ? questionSection : "N/A"}`;

  return fileContent;
}

// Exports generateMarkdown method
exports.generateMarkdown = generateMarkdown;
