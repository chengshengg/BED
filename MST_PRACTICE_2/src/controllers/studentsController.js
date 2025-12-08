// Import Model (for Database)
const model = require("../models/studentsModel");

module.exports.createStudent = (req, res, next) => {
if (
    req.body.name == undefined ||
    req.body.class_id == undefined 
  ) {
    res.status(400).send({message: "Missing required data."});
    return;
  }
  const data = {
    name: req.body.name,
    class_id: req.body.class_id
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error createStudent:", error);
      res.status(500).json({message: "Internal Server Error"});
    } else {
      res.status(201).json({
        message: "Student created successfully.",
        studentId: results.insertId
        })
    }
  };
  model.insertStudent(data, callback);
};

module.exports.updateStudent = (req, res, next) => {
  if (
      req.body.name == undefined ||
      req.body.class_id == undefined 
  ) {
      res.status(400).send({message: "Missing required data."});
      return;
  }
      const data = {
      name: req.body.name,
      class_id: req.body.class_id,
      id: req.params.id
  };
  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error updateStudent:", error);
      res.status(500).json({message: "Internal server error."});
    } else {
      if (results.affectedRows == 0) {
        res.status(404).json({
          message: "Student not found.",
        });
      } else res.status(200).json({message: "Student updated successfully."});
    }
  };

  model.updateStudent(data, callback);
};

