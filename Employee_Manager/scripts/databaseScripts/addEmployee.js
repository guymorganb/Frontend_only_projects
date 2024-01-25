/**
 * JavaScript Code to
 * Add an employee
 */
const inquirer = require('inquirer');
const getManagers = require('./getManagers')
const getRoles = require('./getRolesFromDb')
const queryDB = require('../dbClasses')

let dbquery = new queryDB()
// prompt question for adding an employee
const addEmployeeQuestions = [
        {
            type: 'input',
            name: 'firstName',
            message: "Enter the employee's first name:",
            validate: (input) => {
                if (input.trim() === '') {
                return "Please enter a valid first name";
                }
                return true;
        },
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter the employee's last name:",
            validate: (input) => {
                if (input.trim() === '') {
                return "Please enter a valid last name";
                }
                return true;
        },
        },
        {
            type: 'list',
            name: 'role',
            message: "Select the employee's role:",
            choices: () => getRoles(), // Pass the function which returns an array
        },
        {
            type: 'list',
            name: 'manager',
            message: "Select the employee's manager:",
            choices: () => getManagers(), // Pass the function which returns an array
        },
    ];

const employeeQuestions = async () =>{
    const answers = await inquirer.prompt(addEmployeeQuestions);
    const { firstName, lastName, manager, role } = answers;
    // update database (first name, last name, manager, role)
    dbquery.addEmployee(firstName, lastName, role, manager)
}

module.exports = employeeQuestions;

