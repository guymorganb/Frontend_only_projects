/**
 * Function to retrieve roles from database an put them into an array
 */
const queryDB = require('../dbClasses')

let dbquery = new queryDB('SELECT Title FROM Role')

async function getRoles() {
    try {
        let results = await dbquery.returnArray('Title');
        return results
    } catch (error) {
        console.error({Message: "Error in getRoles", Error: error});
    }
}

module.exports = getRoles;