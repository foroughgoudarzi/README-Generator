// Includes necessary files
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/js/generateMarkdown");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project?",
        validate(text) {
            if (text.length != 0) {
                return true;
            }
            return 'Project title is required:';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a brief project description:",

    },
    {
        type: 'input',
        name: 'installation',
        message: "Please describe the installation process:",

    },
    {
        type: 'input',
        name: 'usage',
        message: "How does the application work?",

    },
    {
        type: 'confirm',
        name: 'contents',
        message: "Do you wish to include a table of contents?",
        default() {
            return 'Y';
        },
    },
    {
        type: 'list',
        name: 'license',
        message: "Under which license is the application covered?",
        choices: ["MIT License", "GNU GPL v3 License", "GNU GPL v2 License", "Apache License 2.0", "BSD-2 License", "BSD-3 License", "Boost Software License"],

    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who are the contributors and/or resources used?",

    },
    {
        type: 'input',
        name: 'tests',
        message: "How can the tests be executed?",

    },
    {
        type: 'input',
        name: 'username',
        message: "What is the GitHub username hosting this project?",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide an email address for user inquiries:",
        validate(text) {
            if (text.length == 0 || (text.includes("@", 1) && text.indexOf("@") < text.length - 1)) {
                return true;
            }
            return 'Enter a valid email:';
        },
    },
];

// Function to write README file
function writeToFile(fileName, data) {

    const fileContent = generateMarkdown.generateMarkdown(data);

    fs.writeFile(fileName, fileContent, (err) => {
        err ? console.error(err) : console.log('File created in the ./output directory!');
    });
}

// Function to initialize program
function init() {

    inquirer.prompt(questions)
        .then((answers) => {

            // Writes README in the output folder
            writeToFile("./output/README.md", answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment.");
            } else {
                console.log("Something went wrong!");
            }
        });
}

// Function call to initialize program
init();
