// Import Model (for Database)
const model = require("../models/diplomaModel");

module.exports.createDiploma = (req, res, next) => {
if (
    req.body.name == undefined ||
    req.body.description == undefined 
  ) {
    res.status(400).send({message: "Missing required data."});
    return;
  }
  const data = {
    name: req.body.name,
    description: req.body.description
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error createNewUser:", error);
      res.status(500).json(error);
    } else {
      res.locals.userId = results.insertId;
      res.status(201).json({
        message: "Diploma created successfully.",
        diplomaId: results.insertId
        })
    }
  };
  model.insertDiploma(data, callback);
};

module.exports.updateDiploma = (req, res, next) => {
    if (
        req.body.name == undefined ||
        req.body.description == undefined 
    ) {
        res.status(400).send({message: "Missing required data."});
        return;
    }
        const data = {
        name: req.body.name,
        description: req.body.description,
        id: req.params.id
    };
    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error updateTree:", error);
        res.status(500).json({message: "Internal server error."});
      } else {
        if (results.affectedRows == 0) {
          res.status(404).json({
            message: "Diploma not found.",
          });
        } else res.status(200).json({message: "Diploma updated successfully."});
      }
    };
  
    model.updateDiploma(data, callback);
  };

module.exports.deleteDiploma = (req, res, next) => {

  const data = {
    id: req.params.id
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error deleteTree:", error);
      res.status(500).json({message: "Internal server error."});
    } else {
      if (results.affectedRows == 0) {
        res.status(404).json({
          message: "Diploma not found",
        });
      } else res.status(200).json({message:"Diploma deleteed successfully."});
    }
  };

  model.deleteDiploma(data, callback);
};

module.exports.getDiploma = (req, res, next) => {

  const data = {
    diploma_id: req.body.diploma_id 
  };

  const callback = (error, results, fields) => {
    if (error) {
      console.error("Error getDiploma:", error);
      res.status(500).json(error);
    } else {
      if (results.length == 0) {
        res.status(404).json({
          message: "Diploma not found",
        });
      }else {
          next()
      }
    };
  }
  model.selectDiploma(data, callback);
};

module.exports.getSummary = (req, res, next) => {

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error getSummary:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        // Status 200: OK - All the SQL work is done in the Model.
        else{
            res.status(200).json({
                message: "Diploma Summary retrieved successfully.",
                summary: results
            })
        }
    }
    
    // Model Function to GET
    model.diplomaSummary(callback);
}