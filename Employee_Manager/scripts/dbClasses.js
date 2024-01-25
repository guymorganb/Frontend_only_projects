/**
 * Classes for repetative operations
 * Database query returning data in array form 
 * & Database query to write a table
 */

const mysql = require('mysql2');
const Table = require('cli-table3');

class queryDB {

    constructor(queryString, host, port, user, password, database){
        this.queryString = queryString;
        this.host = host || '127.0.0.1';
        this.port = port || 3306;
        this.user = user || 'guymorganb'
        this.password = password || 'Colorado1!';
        this.database = database || 'Employee_Manager';
        this.connection = mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.database
          });
    }

    testConnection(){
        this.connection.connect((err) => {
            if (err) {
              console.error({Message: "Database connection error", Error: err});
            } else {
              console.log('Connection successful.');
              // Execute a test query
            this.connection.query(this.queryString, 
                function (error, results) {
                if (error) {
                console.error({Message: "Error querying database", Error: error});
                } else {
                console.log('Query executed successfully.');
                console.log(results);
                }
            });
            }
        })        
    }
    // needs queryString
    // needs objectkey 1 or both objectkey1 & objectkey2
    returnArray(objectKey1,objectKey2) {
        return new Promise((resolve, reject) => {
            this.connection.query(this.queryString, (err, results) => {
                if (err) {
                    console.error({ Message: "Query execution failed: ", Error: err });
                    reject(err);
                    return;
                } else if (!objectKey1) {
                    console.error({Message: "No Object keys defined"});
                    reject(new Error("No Object keys defined"));
                    return;
                }
                let array = results.map(function (result){
                    if (objectKey1 && objectKey2) {
                        return result[objectKey1] + " " + result[objectKey2];
                    } else {
                        return result[objectKey1];
                    }
                });
                resolve(array);
            });
        });
    }
    // setup tableConfig as global
    printTable(tableConfig) {
        return new Promise((resolve, reject) => {
            this.connection.query(this.queryString, (err, results) => {
                if (err) {
                    console.error({ Message: "Query execution failed: ", Error: err });
                    reject(err); // Reject the Promise if there's an error
                } else {
                    const table = new Table(tableConfig)
                    //console.table(results)
                    results.forEach(result => {
                        const row = [];
                        for (const key in result) {
                            row.push(result[key]);
                        }
                        table.push(row);
                    });
                    console.log("\n"); // New line for space
                    console.log(table.toString());
                    process.stdout.write('\x1B[?25h'); // show the console cursor again in case it vanishes
                    resolve(); // Resolve the Promise when the table has been printed
                }
            });
        });
    }
    addDepartment(department_name){
        this.connection.connect((err) => {
            if (err) {
                console.error({Message: "Database connection error", Error: err});
            } else {
                console.log('Connection successful.');
    
                // Define the query string
                let insertQuery = `INSERT INTO Department (Name) VALUES (?)`;
    
                // Execute the insert query
                this.connection.query(insertQuery, [department_name], 
                    function (error, results) {
                        if (error) {
                            console.error({Message: "Error inserting into database", Error: error});
                        } else {
                            console.log('Insert executed successfully.');
                            console.log(results);
                        }
                    });
            }
        })        
    }
    async addRole(newRole, salary, department ){
        this.connection.connect(async (err) => {
            if (err) {
                console.error({Message: "Database connection error", Error: err});
            } else {
                console.log('Connection successful.');
                
                let queryString = `SELECT * FROM Department WHERE name = ?`
                let department_id;
                try {
                    let departmentResults = await new Promise((resolve, reject) => {
                        this.connection.query(queryString, [department], (error, results) => {
                            if (error) {
                                reject({Message: "Error connection to database for department id", Error: error});
                            } else {
                                resolve(results);
                            }
                        });
                    });
                    
                    if (departmentResults.length > 0) {
                        department_id = departmentResults[0].id;
                    } else {
                        console.error({Message: "No manager found with the given name", Department: department});
                        return;
                    }
                } catch(error) {
                    console.error({Message: "Error querying for manager id", Error: error});
                    return;
                }
                
                let querySrting1 = `INSERT INTO Role (title, salary, department_id) VALUES (?, ?, ?)`
                
                this.connection.query(querySrting1, [newRole, salary, department_id], 
                    function (error, results) {
                        if (error) {
                            console.error({Message: "Error inserting into database", Error: error});
                        } else {
                            console.log('Insert executed successfully.');
                            console.log(results);
                        }
                    });
            }
        })
    }
    async addEmployee(first_name, last_name, role_name, manager_name){
        this.connection.connect(async (err) => {
            if (err) {
                console.error({Message: "Database connection error", Error: err});
            } else {
                console.log('Connection successful.');
                // Define the query string to get role_id from role name
                let getRoleAndDepartmentQuery = `SELECT id, Department_id FROM Role WHERE Title = ?`;
                // because you had the wrong schema at first and you werent auto incrementing 
                // you are querying by name in order to get the id, to later query using id for the update
                
                let role_id, department_id;
                try {
                    let results = await new Promise((resolve, reject) => {
                        this.connection.query(getRoleAndDepartmentQuery, [role_name], (error, results) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(results);
                            }
                        });
                    });
    
                    if (results.length > 0) {
                        role_id = results[0].id;
                        department_id = results[0].Department_id;
                    } else {
                        console.error({Message: "No role found with the given name", Role: role_name});
                        return;
                    }
                } catch(error) {
                    console.error({Message: "Error querying for role id and department id", Error: error});
                    return;
                }
    
                let manager_id = null;
    
                // If a manager name is given, fetch their id (manager_name is passed as a single)
                if (manager_name !== 'null') {
                    // concantenates the first and last name of the manager from the database
                    let getManagerQuery = `SELECT id FROM Employee WHERE CONCAT(First_name, ' ', Last_name) = ?`;
    
                    try {
                        // query for manager id because you had the wrong scheme at first Pro tip: always use the id to make less code
                        let managerResults = await new Promise((resolve, reject) => {
                            this.connection.query(getManagerQuery, [manager_name], (error, results) => {
                                if (error) {
                                    reject({Message: "Error connection to database for manager id", Error: error});
                                } else {
                                    resolve(results);
                                }
                            });
                        });
                        
                        if (managerResults.length > 0) {
                            manager_id = managerResults[0].id;
                        }
                         else {
                            console.error({Message: "No manager found with the given name", Manager: manager_name});
                            return;
                        }
                    } catch(error) {
                        console.error({Message: "Error querying for manager id", Error: error});
                        return;
                    }
                }
    
                // the query string to insert a new employee
                let insertQuery = `INSERT INTO Employee (First_name, Last_name, Role_id, Manager_id) VALUES (?, ?, ?, ?)`;
    
                // Execute the insert query
                this.connection.query(insertQuery, [first_name, last_name, role_id, manager_id], 
                    function (error, results) {
                        if (error) {
                            console.error({Message: "Error inserting into database", Error: error});
                        } else {
                            console.log('Insert executed successfully.');
                            console.log(results);
                        }
                    });
            }
        });        
    }
    update(first_name, last_name, newRole){
        this.connection.connect(async (err) => {
            if (err) {
                console.error({Message: "Database connection error", Error: err});
            } else {
                console.log('Connection successful.');
                // get the employees ID# first so we can perform the other operations
                let getEmployeeQuery = `SELECT id FROM Employee WHERE TRIM(Employee.first_name) LIKE CONCAT(?,'%') AND TRIM(Employee.last_name) LIKE CONCAT(?,'%');`;
                let id;
                try{
                    let dbresults = await new Promise((resolve,reject) => {
                        this.connection.query(getEmployeeQuery, [first_name, last_name],(error, results) =>{
                            if (error) {
                                reject(error);
                            } else {
                                resolve(results);
                            }
                        })
                    })
                    id = dbresults[0].id
                }catch(error){
                    console.error({Message: "Error querying employee update", Error: error});
                    return;
                }
                // Get the role id
                let getRoleQuery = `SELECT id FROM Role WHERE TRIM(title) LIKE CONCAT(?,'%');`;
                let role_id;
                try {
                    let dbresults = await new Promise((resolve, reject) => {
                        this.connection.query(getRoleQuery, [newRole], (error, results) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(results);
                            }
                        });
                    });
                    role_id = dbresults[0].id;
                } catch(error) {
                    console.error({Message: "Error querying role update", Error: error});
                    return;
                }
                // Update employee's role
                let updateEmployeeQuery = `UPDATE Employee SET role_id = ? WHERE id = ?;`;
                try {
                    await new Promise((resolve, reject) => {
                        this.connection.query(updateEmployeeQuery, [role_id, id], (error, results) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(results);
                            }
                        });
                    });
                    console.log("Employee's role updated successfully");
                } catch(error) {
                    console.error({Message: "Error updating employee's role", Error: error});
                    return;
                }
            }
            
        });
    }
}
module.exports = queryDB;