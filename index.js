const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/js/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter the project descriptin:",

    },
    {
        type: 'input',
        name: 'usage',
        message: "Explain how the application works:",

    },
    {
        type: 'confirm',
        name: 'contents',
        message: "Would you like to add a table of contents?",
        default() {
            return 'Y';
        },

    },
    {
        type: 'input',
        name: 'installation',
        message: "Explain the installation process:",

    },
    {
        type: 'input',
        name: 'contributing',
        message: "Enter the contributing parties and/or resources:",

    },
    {
        type: 'input',
        name: 'tests',
        message: "Explain how to run the tests:",

    },
    {
        type: 'list',
        name: 'license',
        message: "What license the application is coverd under?",
        choices: ["MIT License", "GNU GPL v3 License", "GNU GPL v2 License", "Apache License 2.0", "BSD-2 License", "BSD-3 License", "Boost Software License"],

    },
    {
        type: 'input',
        name: 'email',
        message: "Enter an email address so the users can contact if there is any question:",
        validate(text) {
            if (text.includes("@", 1) && text.indexOf("@") < text.length - 1) {
                return true;
            }
            return 'Enter a valid email:';
        },
    },
    {
        type: 'input',
        name: 'instruction',
        message: "Enter any additional information for contacting this email address:",
    },

];

// function to write README file
function writeToFile(fileName, data) {

    const fileContent = generateMarkdown.generateMarkdown(data);

    fs.writeFile(fileName, fileContent, (err) => {
        err ? console.error(err) : console.log('File created!');
    });
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
        .then((answers) => {
            // write README
            writeToFile("README.md", answers);
            //  console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment.");
            } else {
                console.log("Something went wrong!");
            }
        });

}

// function call to initialize program
init();
