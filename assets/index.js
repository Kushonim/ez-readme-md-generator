// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title or name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project: ',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: '*This is optional. If your README is long, add a table of contents to make it easy for users to find what they need: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide example tests for your application: '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project: ',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdownContent = generateMarkdown(responses);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
