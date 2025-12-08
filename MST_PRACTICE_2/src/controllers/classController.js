// Import Model (for Database)
const model = require("../models/classModel");

module.exports.createClass = (req, res, next) => {
if (
    req.body.name == undefined ||
    req.body.diploma_id == undefined 
  ) {
    res.status(400).send({message: "Missing required data."});
    return;
  }
  const data = {
    name: req.body.name,
    diploma_id: req.body.diploma_id
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error createClass:", error);
      res.status(500).json(error);
    } else {
        res.locals.classId = results.insertId
        next()
    }
  };
  model.insertClass(data, callback);
};

module.exports.selectClass = (req, res, next) => {
    
  const data = {
    id: res.locals.classId
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error createClass:", error);
      res.status(500).json({message: "Internal server error"});
    } else {
        res.status(201).json({
            message: "Class added successfully.",
            class: results[0]
        })
    }
  };
  model.selectClass(data, callback);
};

module.exports.checkClass = (req, res, next) => {
    
  const data = {
    id: req.body.class_id
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error checkClass:", error);
      res.status(500).json({message: "Internal server error"});
    } else if(results.length == 0){
      res.status(404).json({message: "Class not found."});
    }
    else {
        next()
    }
  };
  model.selectClass(data, callback);
};

module.exports.checkClassInDiploma = (req, res, next) => {
    
  const data = {
    id: req.params.id
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error checkClass:", error);
      res.status(500).json({message: "Internal server error"});
    } else if(results.length > 0){
      res.status(409).json({message: "There are classes still linked to this diploma."});
    }
    else {
        next()
    }
  };
  model.selectDiploma(data, callback);
};
