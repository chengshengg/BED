// Import Pool (Database Connection)
const pool = require("../services/db");

module.exports.insertStudent = (data, callback) => {
    const SQLSTATMENT = `
        INSERT INTO Students (name, class_id)
        VALUES (?, ?)
    `;
    const VALUES = [data.name, data.class_id];

    pool.query(SQLSTATMENT, VALUES, callback);
}

module.exports.updateStudent = (data, callback) => {
    const SQLSTATMENT = `
        UPDATE Students
        SET name = ?, class_id = ?
        WHERE id = ?;
    `;
    const VALUES = [data.name, data.class_id, data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}
