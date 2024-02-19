# README-Generator

## Description

README-Generator is a command-line application that dynamically generates a professional `README.md` file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). The user is prompted for information about their application repository, then a high-quality, professional `README.md` is generated with the project title and sections entitled:

* Description
* Table of Contents: This section is added if the user chooses to include it.
* Installation
* Usage
* License: A list of options is provided where the user can choose one. A badge for that license is added near the top of the README, and a notice is included in the License section explaining which license the application is covered under.
* Contributing
* Tests
* Questions

## Installation

N/A

## Usage

To use the application, execute the following command within the application's directory:

```bash
node index.js
```

After responding to the prompted questions, a README file is automatically generated in the `./output/` directory with the filename `README.md`.

For a detailed demonstration of the application's functionality, please refer to this video: [walkthrough video](./assets/images/walkthrough.mp4).

## License

Please see the [License](./LICENSE).

## Credit

The following resources were used:

* [inquirer](https://www.npmjs.com/package/inquirer)
* [W3 Schools](https://www.w3schools.com/)
* [Node.js Documentation](https://nodejs.org/en)
