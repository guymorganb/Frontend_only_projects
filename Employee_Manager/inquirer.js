const inquirer = require('inquirer');
const viewRoles = require('./scripts/viewDataScripts/viewAllRoles')
const viewDepartments = require('./scripts/viewDataScripts/viewDepartments')
const viewEmployees = require('./scripts/viewDataScripts/viewEmployees')
const roleQuestions = require('./scripts/databaseScripts/addRole')
const newDepartment = require('./scripts/databaseScripts/addDepartment')
const printBanner = require('./scripts/viewDataScripts/EmployeeTrackerBanner')
const employeeQuestions = require('./scripts/databaseScripts/addEmployee')
const updateEmployee = require('./scripts/databaseScripts/updateEmployee')
const queryDB = require('./scripts/dbClasses')



const promptUser = async () => {
    try{
        // Prompt User
        const questions = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View all Employees', 'Quit'],
            },
        ]);
        if (questions.action === 'Add Employee') {
            await employeeQuestions(); // Run the employeeQuestions function
            promptUser()
        }
          else if(questions.action === 'Update Employee Role'){
            // prompt sequence: 
            await updateEmployee()
            promptUser()
        }
          else if(questions.action === 'View All Roles'){
            // displays table with | department id | Role title | department name | Salary |
            await viewRoles() 
            promptUser()
        }
          else if(questions.action === 'Add Role'){
            // prompt sequence:
            await roleQuestions()
            promptUser();
        }
          else if(questions.action === 'View All Departments'){
            // displays table with | department id | department name |
            await viewDepartments(); 
            promptUser()
        }
          else if(questions.action === 'Add Department'){
            // prompt sequence: What is the name of the department? , (Should assign department id as the next number not used) prints "added <department> to database"
            await newDepartment();
            promptUser()
        }
          else if(questions.action === 'View all Employees'){
            // displays table with | department id | first name | last name | Title | department name | salary | manager of employee |
            await viewEmployees() 
            promptUser()
        }
          else if(questions.action === 'Quit'){
            process.kill(process.pid, 'SIGINT'); // kills the server connection by emulating "ctrl + c"
        }
    }
    catch(err){
        console.error({Message: 'Error with inquirer', Error: err});
    }
}
// Star
(async function start() {
    // Print the banner once
    await printBanner();
    // Now start prompting user
    await promptUser();
  })();

