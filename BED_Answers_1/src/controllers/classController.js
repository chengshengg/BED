// Import Diploma Model to be used
const model = require('../models/classModel');


// Q4 - POST Class (Create)
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

// Q4 - GET Diploma (Get/Check)
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