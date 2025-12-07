// Import Pool - Database Connection
const pool = require('../services/db');

// Q4 - POST Class (Create)
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


// 4 - GET Class (Get)
module.exports.selectById = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Class
        WHERE id = ?;
    `;

    const VALUES = [data.id]

    pool.query(SQLSTATEMENT, VALUES, callback);
}