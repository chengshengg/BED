// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require("../services/db");

// ##############################################################
// DEFINE SQL STATEMENTS
// ##############################################################
const SQLSTATEMENT = `
DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Class;
DROP TABLE IF EXISTS Diploma;

CREATE TABLE Students ( id INT AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, class_id INT NOT NULL );
CREATE TABLE Class ( id INT AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, diploma_id INT NOT NULL );
CREATE TABLE Diploma ( id INT AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL );

INSERT INTO Students (name, class_id) VALUES ('John Doe', 1), ('Jane Smith', 2), ('Charlie Davis', 3), ('Bob Brown', 4);
INSERT INTO Class (name, diploma_id) VALUES ('DIT1B09', 1), ('DIT1B10', 1), ('DCDF1B11', 2), ('DAAA1B05', 3);
INSERT INTO Diploma (name, description) VALUES ('DIT', 'Diploma in Information Technology'), ('DCDF', 'Diploma in Cybersecurity & Digital Forensics'), ('DAAA', 'Diploma in Applied AI & Analytics');
`;

// ##############################################################
// RUN SQL STATEMENTS
// ##############################################################
pool.query(SQLSTATEMENT, (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully");
  }
  process.exit();
});
