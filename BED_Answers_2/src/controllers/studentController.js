// Import Student Model to be used
const model = require('../models/studentModel');


//[Paper 2] Q1 - POST Student (Create)
module.exports.createStudent = (req, res, next) => {

    // Status 400: Missing Required Data
    if (req.body.name == undefined || req.body.class_id == undefined) {
       return res.status(400).json({message: "Missing required data."});
    }

    // Declare data object to be used in model
    const data = {
        name: req.body.name,
        class_id: req.body.class_id
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error createStudent:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        // Class Creation Successful, show the new Student ID
        else{
            res.status(201).json({
                message: "Student added successfully.",
                studentId: results.insertId
            })
        }
    }
    
    // Model Function to Create
    model.insertNew(data, callback);
}

//[Paper 2] Q2 - PUT Student (Update)
module.exports.updateStudent = (req, res, next) => {

    // Status 400: Missing Required Data
    if (req.body.name == undefined || req.body.class_id == undefined) {
       return res.status(400).json({message: "Missing required data."});
    }

    // Declare data object to be used in model
    const data = {
        name: req.body.name,
        class_id: req.body.class_id,
        id: req.params.id // student.id for choosing which student to update
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error updateStudent:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 404: Not found
            if (results.affectedRows == 0) { // No rows were updated
                return res.status(404).json({message:"Student not found."});
            }

            // Status 200: OK
            return res.status(200).json({message: "Student updated successfully."});
        }
    }
    
    // Model Function to Update
    model.updateById(data, callback);
}

//[Paper 2] Q4 - CHECK Student by Class (Get/Check)
module.exports.checkStudentByClass = (req, res, next) => {

    // Declare data object to be used in model
    const data = {
        class_id: req.params.id //The req.params.id here is for Class ID NOT Student ID
    };

    const callback = (error, results, fields) => {

        // Status 500: Internal Server Error
        if(error){
            console.error("Error checkStudentByClass:", error);
            return res.status(500).json({message: "Internal Server Error"});
        }
        
        else{

            // Status 409: Conflict
            if (results.length > 0) {  //If more than 0, means there are still students
                return res.status(409).json({message:"There are students still linked to this class."});
            }
            
            // Else, no Students found linked to this Class
            // All checks passed, we move onto the next middleware. 
            else {
                next();
            }
            
        }
    }
    
    // Model to GET Student BY CLASS_ID not Student ID
    model.selectByClass(data, callback);
}