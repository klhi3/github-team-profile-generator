// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./src/generateMarkdown.js');
const fileName = 'index.html';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'Manager_name',
        message: 'What is Manager\'s username?',
    },    
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is Manager\'s idl?',
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'What is Manager\'s email?',
    },  
    {
        type: 'input',
        name: 'manager_office_namer',
        message: 'What is Manager\'s office number?',
    },  
    {
        type: 'expand',
        name: 'manager_choice',
        message: 'Please select next step',
        choices:[
            {
                key: 'e',
                name: 'Add Engineer team member',
                value: ''
            },
            {
                key: 'i',
                name: 'Add Intern team member',
                value: ''           
            },
            new inquirer.Separator(),
            {
                key: 'f',
                name: 'Finish building my team',
                value: ''           
            },
        ]
    },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'How to install?',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Describe usage?',
    // },
    // {
    //     type: 'input',
    //     name: 'constribution',
    //     message: 'Provide any contribution?',
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Tests',
    // },
    // {
    //     type: 'input',
    //     name: 'questions',
    //     message: 'Questions',
    // },
    // {
    //     type: 'checkbox',
    //     message: 'License for your project?',
    //     name: 'license',
    //     choices: ['MIT', 'MPL'],
    // },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};


// FUNCTIONS
// function replacePlaceholder(string, placeholder, newValue) {
//     return string.replace(`!!! ${placeholder} !!!`, newValue)
//   }
function replacePlaceholder(string, answers) {

    return string.replace(`!!! ${placeholder} !!!`, answers)
  }

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {

    let templateString = fs.readFileSync("template.html","utf8");

    // templateString = replacePlaceholder(templateString, "name", data.name);
    templateString = replacePlaceholder(templateString, answers);

    // create index.html from template file
    fs.writeFile(fileName, templateString, err =>{
        if (err) return console.log("writeToFile error: "+err);
        else console.log("Successfully created "+fileName+"!")
    });
    
    // fs.writeFile(fileName, answers, err =>{
    //     if (err) return console.log("writeToFile error: "+err);
    //     else console.log("Successfully created "+fileName+"!")
    // });


}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init () {
    promptUser()
    .then((answers) => writeFileAsync(fileName, generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to "+fileName))
    .catch((err) => console.error(err)); 
};


// Function call to initialize app
init();