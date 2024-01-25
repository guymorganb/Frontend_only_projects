// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// destructuring the array for use
const {markdown, renderLicenseBadge, renderLicenseSection} = require('./utils/generateMarkdown')
// setting the file path
const filePath = '../newREADME.md'
const licesncePath = '../LICENSE'

// an array of questions for user input
const questions = [ 
{
    type : 'input',
    name : 'Author',
    message : 'What is the Authors name?'
},
{
    type: 'input',
    name: 'Title',
    message: 'Enter the title of your project:',
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter a description for your project',
},
{
    type: 'input',
    name: 'Instalation',
    message: 'How would you describe the instalation process?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Descibe the usage of this project',
},
{
    type: 'input',
    name: 'Questions',
    message: 'What email adress can you be reached at to answer questions about the project?',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'Please enter your GitHub username.',
},
{
    type: 'list',
    name: 'License',
    message: 'Select a license for your project:',
    choices: [
        'MIT',
        'Apache',
        'GNU',
        'ISC',
        'Unlicense',
        'Artistic',
        'Author Defined',
    ]
},
{
    type: 'input',
    name: 'Credits',
    message: 'Are there any credits to note for this project?',
},
{
    type: 'input',
    name: 'Contributing',
    message: 'How can others contribute to the project.',
},
{
    type: 'input',
    name: 'Features',
    message: 'Are there any features youd like to include for this project?',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Are there any tests for this project?',
}
];
// initialize the app
function init() {
    inquirer.prompt(questions).then(function(answers){
    writeToFile(filePath, answers)
    })
}

// a function to write README file
function writeToFile(fileName, answers) {
    // render badge and links
    let badge = renderLicenseBadge(answers)
    //render legal jargon 
    let legal = renderLicenseSection(answers);
    // render the .md structure
    let md = markdown(answers, badge, legal)
    // write the file
    fs.writeFile(fileName, md, (error) => {
        if(error){
            console.error('Error writing file:', error);
        }else(
            console.log('File sucessfully written')
        )
    } )
    fs.writeFile(licesncePath, legal, (error) => {
        if(error){
            console.error('Error writing file:', error);
        }else(
            console.log('File sucessfully written')
        )
    } )
}
    
// Function call to initialize app
init();

