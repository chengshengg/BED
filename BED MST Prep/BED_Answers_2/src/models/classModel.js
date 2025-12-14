// Import Pool - Database Connection
const pool = require('../services/db');

//[Paper 1] Q4 - POST Class (Create)
module.exports.insertNew = (data, callback) =>
{
    const SQLSTATEMENT = `
        INSERT INTO Class (name, diploma_id)
        VALUES (?, ?)
    `;

    const VALUES = [
        data.name, data.diploma_id
    ]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 1] Q4 - GET Class By Id (Get)
module.exports.selectById = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Class
        WHERE id = ?;
    `;

    const VALUES = [data.id]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 2] Q3 - GET Class By Diploma (Get)
module.exports.selectByDiploma = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Class
        WHERE diploma_id = ?;
    `;

    const VALUES = [data.diploma_id]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 2] Q4 - DELETE Class (Delete)
module.exports.deleteById = (data, callback) =>
{
    const SQLSTATEMENT = `
        DELETE FROM Class
        WHERE id = ?;
    `;

    const VALUES = [data.id]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 2] Q5 - GET Class Population (SQL Get)
module.exports.classPopulation = (callback) =>
{

    const SQLSTATEMENT = `
        SELECT
            Class.name AS class,
            COUNT(Students.id) AS total_students
        
        FROM Class
        INNER JOIN Students 
        ON Class.id = Students.class_id

        GROUP BY Class.id, Class.name
        ORDER BY total_students DESC;
    `;

    pool.query(SQLSTATEMENT, callback);
}