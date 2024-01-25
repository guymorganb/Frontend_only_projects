/**
 * Function to retrieve departments from database an put them into an array 
 * displays table with 
 * | department id | department name |
 */
const queryDB = require('../dbClasses')

const viewDepartments = async () => {
    let config = {
        head: ['Department ID', 'Department Name'], 
        colWidths: [15, 25]
    }
    let dbquery = new queryDB(`SELECT * FROM Department;`)
     const departments = await dbquery.printTable(config)
     return departments;
}

module.exports = viewDepartments;