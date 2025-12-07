// Import Pool (Database Connection)
const pool = require("../services/db");

// Q1 - Create Tree Model
module.exports.insertSingle = (data, callback) =>
{
    const SQLSTATMENT = `
        INSERT INTO Tree (species, age, height, user_id)
        VALUES (?, ?, ?, ?);
    `;
    const VALUES = [data.species, data.age, data.height, data.user_id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

// Q2 - Delete Tree Model
module.exports.deleteById = (data, callback) =>
{
    const SQLSTATMENT = `
        DELETE FROM Tree
        WHERE id = ?
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

// Q3 - Update Tree Model
module.exports.updateById = (data, callback) =>
{
    const SQLSTATMENT = `
        UPDATE Tree
        SET species = ?, age = ?, height = ?, user_id = ?
        WHERE id = ?;
    `;
    const VALUES = [data.species, data.age, data.height, data.user_id, data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

// Q4 - Get Specific Tree Model
module.exports.selectById = (data, callback) =>
{
    const SQLSTATMENT = `
        SELECT * FROM Tree
        WHERE id = ?;
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}