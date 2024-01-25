/**
 * JavaScript Code to
 * Update an employee's role
 */
const inquirer = require('inquirer');
const getEmployess = require('./getEmployees')
const getRoles = require('./getRolesFromDb')
const queryDB = require('../dbClasses')

let dbquery = new queryDB()
// prompt question for adding an employee
const updateEmployeeQuestions = [
        {
            type: 'list',
            name: 'employee',
            message: "Which employee do you want to update?",
            choices: () => getEmployess(), // Pass the function which returns an array
        },
        {
            type: 'list',
            name: 'role',
            message: "Which role do you want to assign to the selected employee?",
            choices: () => getRoles(), // Pass the function which returns an array
        },
    ];

const updateEmployee = async () =>{
    const answers = await inquirer.prompt(updateEmployeeQuestions);
    const {employee, role } = answers;
    let split = employee.split(" ");
    let firstName = split[0]
    let lastName = split[1]
    // update database (employee name, Role)
    dbquery.update(firstName, lastName, role)
}

module.exports = updateEmployee;

