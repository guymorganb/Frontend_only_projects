/**
 * Function to retrieve roles from database an put them into an array 
 * displays table with 
 * | department id | Role title | department name | Salary |
 */

const queryDB = require('../dbClasses')

const viewRoles = async () => {
    let config = {head: ['ID', 'Title', 'Department', 'Salary'],colWidths: [5, 25, 20, 15]}
    let dbquery = new queryDB (`
    SELECT
     Role.department_id AS Department_id, Role.title AS Role_Title, Department.name AS Department_Name, Role.salary 
    FROM
     Role JOIN Department ON Role.department_id = Department.id;`)
    const roles = await dbquery.printTable(config)
    return roles;
}

module.exports = viewRoles;