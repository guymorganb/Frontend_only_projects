/**
 * JavaScript Code to
 * Add a department
 */
const inquirer = require('inquirer');
const queryDB = require('../dbClasses')

let dbquery = new queryDB()
// prompt question for adding an employee
const addDepartment = [
        {
            type: 'input',
            name: 'department',
            message: "What is the name of the department?",
            validate: (input) => {
                if (input.trim() === '') {
                return "Please enter a valid department name";
                }
                return true;
        },
        },
    ];

const newDepartment = async () =>{
    const answers = await inquirer.prompt(addDepartment);
    const { department } = answers;
    
    //update database (department id, department)
    dbquery.addDepartment(department)

    
}

module.exports = newDepartment;