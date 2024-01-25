/**
 * Function to retrieve department id's from database an put them into an array
 */

const queryDB = require('../dbClasses')

let dbquery = new queryDB('SELECT Department.id AS Department_id FROM Department')

async function getDepartmentIds() {
    try {
        let results = await dbquery.returnArray('Department_id');
        return results
    } catch (error) {
        console.error({Message: "Error in getDepartments", Error: error});
    }
}

module.exports = getDepartmentIds;