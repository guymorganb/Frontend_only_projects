/**
 * JavaScript Code to
 * Add a role
 */
const inquirer = require('inquirer');
const getDepartments = require('./getDepartments')
const queryDB = require('../dbClasses')

let dbquery = new queryDB()
// prompt question for adding an employee
const addRoleQuestions = [
        {
            type: 'input',
            name: 'newRole',
            message: "What is the name of the role?",
            validate: (input) => {
                if (input.trim() === '') {
                return "Please enter a valid role";
                }
                return true;
        },
        },
        {
            type: 'input',
            name: 'salary',
            message: "what is the salary or the role?",
            validate: (input) => {
                if (input.trim() === '') {
                return "Please enter a valid last name";
                }
                return true;
        },
        },
        {
            type: 'list',
            name: 'department',
            message: "Which department does this role belong to?",
            choices: () => getDepartments(), // Pass the function which returns an array
        },
    ];

const roleQuestions = async () =>{
    const answers = await inquirer.prompt(addRoleQuestions);
    const { newRole, salary, department } = answers;
  
    //update database (Role, salary, department)
    dbquery.addRole(newRole, salary, department)
}

module.exports = roleQuestions;