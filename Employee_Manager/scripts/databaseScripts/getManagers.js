/**
 * Function to retrieve managers from database an put them into an array
 */
const queryDB = require('../dbClasses')


let dbquery = new queryDB('SELECT First_name, Last_name FROM Employee')

async function getManagers() {
    try {
        let results = await dbquery.returnArray('First_name', 'Last_name');
        results = [...results, 'null']
        return results;
    } catch (error) {
        console.error({Message: "Error in getManagers", Error: error});
    }
}
module.exports = getManagers;