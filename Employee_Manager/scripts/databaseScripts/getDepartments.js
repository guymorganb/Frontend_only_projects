/**
 * Function to retrieve departments from database an put them into an array
 */
const queryDB = require('../dbClasses')

let dbquery = new queryDB('SELECT Department.Name AS Department_Name FROM Department')

async function getDepartments() {
    try {
        let results = await dbquery.returnArray('Department_Name');
        return results
    } catch (error) {
        console.error({Message: "Error in getDepartments", Error: error});
    }
}

module.exports = getDepartments;