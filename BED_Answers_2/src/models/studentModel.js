// Import Pool - Database Connection
const pool = require('../services/db');

//[Paper 2] Q1 - POST Student (Create)
module.exports.insertNew = (data, callback) =>
{
    const SQLSTATEMENT = `
        INSERT INTO Students (name, class_id)
        VALUES (?, ?)
    `;

    const VALUES = [
        data.name, data.class_id
    ]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 2] Q2 - PUT Student (Update)
module.exports.updateById = (data, callback) =>
{
    const SQLSTATEMENT = `
        UPDATE Students
        SET name = ?, class_id = ?
        WHERE id = ?
    `;

    const VALUES = [
        data.name, data.class_id, data.id
    ]

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//[Paper 2] Q4 - GET Student by Class (Get)
module.exports.selectByClass = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Students
        WHERE class_id = ?;
    `;

    const VALUES = [data.class_id]

    pool.query(SQLSTATEMENT, VALUES, callback);
}