// Import Pool (Database Connection)
const pool = require("../services/db");

// Q5 - Update Tree Watered_On
module.exports.waterTree = (data, callback) =>
{
    const SQLSTATMENT = `
        UPDATE Tree
        SET watered_on = NOW()
        WHERE id = ?;
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

// Q6 - Get Tree by User Id
module.exports.selectTreeByUser = (data, callback) =>
{
    const SQLSTATMENT = `
        SELECT * FROM Tree
        WHERE user_id = ?;
    `;
    const VALUES = [data.user_id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

// Q7 - Get Average Age of Trees for Specific User
module.exports.averageAge = (data, callback) =>
{
    const SQLSTATMENT = `
        SELECT
            AVG(age) AS averageAge,
            COUNT(id) AS numberOfTrees
        FROM Tree
        WHERE user_id = ?
    `;
    const VALUES = [data.user_id];

    pool.query(SQLSTATMENT, VALUES, callback);
}