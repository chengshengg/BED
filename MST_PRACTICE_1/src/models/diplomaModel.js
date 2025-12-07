// Import Pool (Database Connection)
const pool = require("../services/db");

module.exports.insertDiploma = (data, callback) =>
{
    const SQLSTATMENT = `
        INSERT INTO Diploma (name, description)
        VALUES (?, ?);
    `;
    const VALUES = [data.name, data.description];

    pool.query(SQLSTATMENT, VALUES, callback);
}

module.exports.deleteDiploma = (data, callback) =>
{
    const SQLSTATMENT = `
        DELETE FROM Diploma
        WHERE id = ?
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

module.exports.updateDiploma = (data, callback) =>
{
    const SQLSTATMENT = `
        UPDATE Diploma
        SET name = ?, description = ?
        WHERE id = ?;
    `;
    const VALUES = [data.name, data.description, data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

module.exports.selectDiploma = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT * FROM Diploma
    WHERE id = ?`;
  
    const VALUES = [data.diploma_id];
  
    pool.query(SQLSTATEMENT, VALUES, callback);
  };
  
  module.exports.diplomaSummary = (callback) =>
    {
        // Using the FROM, INNER JOIN, INNER JOIN,  
        // We declare the tables as Diploma = d, Class = c, Students = s 
        // So when we write d.id, we're referring to the id in Diploma table. 
        // c.diploma_id = d.id means we're comparing [diploma_id in Class] to [id in Diploma].
        // Use AS to rename a variable as an Alias 
        // Use GROUP BY to group results together in 1 object each (per diploma for example)
    
        const SQLSTATEMENT = `
            SELECT 
                d.name AS diploma,
                d.description,
                COUNT(c.id) AS total_classes,
                COUNT(s.id) AS total_students
            FROM Diploma d
            INNER JOIN Class c ON c.diploma_id = d.id
            INNER JOIN Students s ON s.class_id = c.id
            GROUP BY d.id
        `;
    
        pool.query(SQLSTATEMENT, callback);
    }