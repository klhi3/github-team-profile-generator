// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generateHtml = require('./src/generateHtml.js');
const fileName = 'index.html';

const team = [];

//  Create an array of questions for user input
const addManager = () => {
    return inquirer.prompt ([ 
        {
            type: 'input',
            name: 'name',
            message: 'What is Manager\'s name?',
            validate: name => {
                if (name) return true;
                else {
                    console.log("Please enter Manager\'s name."); 
                    return false;
                }
            }
        },    
        {
            type: 'input',
            name: 'id',
            message: 'What is Manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Manager\'s email?',
        },  
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is Manager\'s office number?',
        }, 
    ])
    .then(data => {

        const { name, id, email, officeNumber } = data;
        const manager = new Manager(name, id, email, officeNumber);

        team.push(manager);
     })
};

const addEmployee = () => {
   console.log("\n>>>>>>> add Employee to the team: ");

   return inquirer.prompt ([
       {
        type: 'list',
        name: 'role',
        message: 'Add a team member\'s role',
        choices:['Engineer','Intern'],
       },
       {
        type: 'input',
        name: 'name',
        message: 'What is employee\'s name?',   
       },
       {
        type: 'input',
        name: 'id',
        message: 'What is employee\'s id?',   
       },
       {
           type: 'input',
           name: 'email',
           message: 'What is employee\'s email?',
       }, 
       {
        type: 'input',
        name: 'github',
        message: 'What is engineer\'s github username?',
        when: (input) => input.role === "Engineer",
       },  
       {
        type: 'input',
        name: 'school',
        message: 'What is intern\'s school?',
        when: (input) => input.role === "Intern",
       },   
       {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to add more team member?',
        default: false,
       },   
   ])
   .then(data => {
      const { name, id, email, role, github, school, confirmAdd } = data;

      if (role === "Engineer") {
        const emp = new Engineer(name, id, email, github);
        team.push(emp);
      }
      else if (role === "Intern")  {
        const emp  = new Intern(name, id, email, school);
        team.push(emp);
      }
       
     if (confirmAdd) return addEmployee(team);
     else return team;
   });
};

//  Create a function to write README file
const writeToFile = (data) => {

    // create index.html from template file
    fs.writeFile("./dist/index.html", data, err =>{
        if (err) return console.log("writeToFile error: "+err);
        else console.log("\n>>>>>>>> Successfully created "+fileName+"!")
    });
    
}

//  Create a function to initialize app
function init () {
    addManager()
    .then(addEmployee)
    .then(team => { return generateHtml(team) })
    .then(page => { return writeToFile(page) })
    .catch((err) => console.error(err)); 
};


// Function call to initialize app
init();