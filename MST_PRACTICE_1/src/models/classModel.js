// Import Pool (Database Connection)
const pool = require("../services/db");

module.exports.insertClass = (data, callback) =>
{
    const SQLSTATMENT = `
        INSERT INTO Class (name, diploma_id)
        VALUES (?, ?);
    `;
    const VALUES = [data.name, data.diploma_id];

    pool.query(SQLSTATMENT, VALUES, callback);
}
module.exports.selectClass = (data, callback) =>
    {
        const SQLSTATMENT = `
            SELECT * FROM Class 
            WHERE id = ?
        `;
        const VALUES = [data.classId];
        pool.query(SQLSTATMENT, VALUES, callback);
    }
        