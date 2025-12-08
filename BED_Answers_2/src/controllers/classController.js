// Import Class Model to be used
const model = require('../models/classModel');


//[Paper 1] Q4 - POST Class (Create)
module.exports.createClass = (req, res, next) => {

    // Status 400: Missing Required Data
    if (req.body.name == undefined || req.body.diploma_id == undefined) {
       return res.status(400).json({message: "Missing required data."});
    }

    // Declare data object to be used in model
    const data = {
        name: req.body.name,
        diploma_id: req.body.diploma_id
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error createClass:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        // If we pass all error handling
        else{
            // 1. Save the newly created Class ID 
            // 2. Use next(); to move onto next function in the route
            res.locals.classId = results.insertId //insertId = new class id 
            next(); 
        }
    }
    
    // Model Function to Create
    model.insertNew(data, callback);
}

//[Paper 1] Q4 - GET Class (Get/Check)
module.exports.getClassById = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        id: req.params.id || res.locals.classId // class.id saved from create class
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error getClass:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.length == 0) { 
                return res.status(404).json({message:"Diploma not found."});
            }
            
            // Finally, at the end of the route (last function)
            // Status 201: Class Created
            else {
                res.status(201).json({ 
                    message: "Class added successfully.",
                    class: results[0] // [0] to select first class object in results array
                })
            }
            
        }
    }
    
    // Model Function to GET
    model.selectById(data, callback);
}

//[Paper 2] Q1 - CHECK Class By Id (Get/Check)
module.exports.checkClassById = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        id: req.body.class_id // There's no req.params in this route, but req.body has class id
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error checkClassById:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.length == 0) { 
                return res.status(404).json({message:"Class not found."});
            }
            
            // All checks passed, we move onto the next middleware. 
            else {
                next();
            }
            
        }
    }
    
    // We re-use the Model Function to GET Class
    model.selectById(data, callback);
}

//[Paper 2] Q3 - CHECK Class By Diploma (Get/Check)
module.exports.checkClassByDiploma = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        diploma_id: req.params.id //The req.params.id here is for Diploma ID NOT Class ID.
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error checkClassByDiploma:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 409: Conflict
            if (results.length > 0) {  //If more than 0, means there are still classes
                return res.status(409).json({message:"There are classes still linked to this diploma."});
            }
            
            // Else, no Classes found linked to this Diploma
            // All checks passed, we move onto the next middleware. 
            else {
                next();
            }
            
        }
    }
    
    // Model to GET Class BY DIPLOMA_ID not Class ID
    model.selectByDiploma(data, callback);
}

//[Paper 2] Q4 - DELETE Class (Delete)
module.exports.deleteClass = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        id: req.params.id // class.id for choosing which class to delete
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error deleteClass:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.affectedRows == 0) { // No rows were deleted
                return res.status(404).json({message:"Class not found."});
            }

            // Status 200: OK
            return res.status(200).json({message: "Class deleted successfully."});
        }
    }
    
    // Model Function to Update
    model.deleteById(data, callback);
}


//[Paper 2] Q5 - GET Class Population (SQL Get)
module.exports.getPopulation = (req, res, next) => {

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error getPopulation:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        // Status 200: OK - All the SQL work is done in the Model.
        else{
            res.status(200).json({
                message: "Class Population Summary retrieved successfully.",
                summary: results
            })
        }
    }
    
    // Model Function to GET
    model.classPopulation(callback);
}