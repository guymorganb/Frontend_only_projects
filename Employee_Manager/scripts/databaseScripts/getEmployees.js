/**
 * Function to retrieve employees list from database an put them into an array
 */
const queryDB = require('../dbClasses')

let dbquery = new queryDB('SELECT First_name, Last_name FROM Employee')

async function getEmployees() {
    try {
        let results = await dbquery.returnArray('First_name', 'Last_name');
        return results
    } catch (error) {
        console.error({Message: "Error in getEmployees", Error: error});
    }
}

module.exports = getEmployees;