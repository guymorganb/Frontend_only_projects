/**
 * Function to retrieve employees from database an put them into an array 
 * displays table with 
 * | department id | first name | last name | Title | department name | salary | manager of employee |
 */
const queryDB = require('../dbClasses')

const viewEmployees = async () => {
    let config = {
        head: ['Department ID', 'First Name', 'Last Name', 'Title', 'Department Name', 'Salary', 'Manager Name'],
        colWidths: [15, 15, 15, 15, 20, 10, 20]
      };
      
    let dbquery = new queryDB(`
    SELECT 
      Department.id AS Department_id,
      Employee.First_name AS First_name,
      Employee.Last_name AS Last_name,
      Role.Title AS Title,
      Department.Name AS Department_Name,
      Role.Salary AS Salary,
      CONCAT(Manager.First_name, ' ', Manager.Last_name) AS Manager_Name
    FROM 
      Employee
    LEFT JOIN 
      Role ON Employee.Role_id = Role.id
    LEFT JOIN 
      Department ON Role.Department_id = Department.id
    LEFT JOIN 
      Employee AS Manager ON Employee.Manager_id = Manager.id
    `);
    const employees = await dbquery.printTable(config)
    return employees;
}

module.exports = viewEmployees;