DROP DATABASE IF EXISTS Employee_Manager;
CREATE DATABASE Employee_Manager;
USE Employee_Manager;

CREATE TABLE Department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(30)
);

CREATE TABLE Role (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
    REFERENCES Department(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE Employee (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
    REFERENCES Role(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY (manager_id)
    REFERENCES Employee(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
