// Import Diploma Model to be used
const model = require('../models/diplomaModel');


// Q1 - POST Diploma (Create)
module.exports.createDiploma = (req, res, next) => {

    // Status 400: Missing Required Data
    if (req.body.name == undefined || req.body.description == undefined) {
       return res.status(400).json({message: "Missing required data."});
    }

    // Declare data object to be used in model
    const data = {
        name: req.body.name,
        description: req.body.description
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error createDiploma:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 201: Created
            res.status(201).json({
                message: "Diploma added successfully.", 
                diplomaId: results.insertId //insertId = Newly created Diploma ID.
            });

            return;
        }
    }
    
    // Model Function to Create
    model.insertNew(data, callback);
}

// Q2 - PUT Diploma (Update)
module.exports.updateDiploma = (req, res, next) => {

    // Status 400: Missing Required Data
    if (req.body.name == undefined || req.body.description == undefined) {
       return res.status(400).json({message: "Missing required data."});
    }

    // Declare data object to be used in model
    const data = {
        name: req.body.name,
        description: req.body.description,
        id: req.params.id // diploma.id for choosing which diploma to update
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error updateDiploma:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.affectedRows == 0) { // No rows were updated
                return res.status(404).json({message:"Diploma not found."});
            }

            // Status 200: OK
            return res.status(200).json({message: "Diploma updated successfully."});
        }
    }
    
    // Model Function to Update
    model.updateById(data, callback);
}

// Q3 - DELETE Diploma (Delete)
module.exports.deleteDiploma = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        id: req.params.id // diploma.id for choosing which diploma to delete
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error deleteDiploma:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.affectedRows == 0) { // No rows were deleted
                return res.status(404).json({message:"Diploma not found."});
            }

            // Status 200: OK
            return res.status(200).json({message: "Diploma deleted successfully."});
        }
    }
    
    // Model Function to Update
    model.deleteById(data, callback);
}

// Q4 - GET Diploma (Get/Check)
module.exports.getDiplomaById = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        id: req.body.diploma_id // diploma.id for choosing which diploma to retrieve
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error getDiploma:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.length == 0) { 
                return res.status(404).json({message:"Diploma not found."});
            }

            // If we pass all error handling
            // Use next(); to move onto next function in the route
            next(); 
        }
    }
    
    // Model Function to GET
    model.selectById(data, callback);
}

// Q5 - GET Diploma Summary (SQL Get)
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