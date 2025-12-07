// Import Model (for Database)
const model = require("../models/studentsModel");

// Q5 Update Tree watered_on
module.exports.waterTree = (req, res, next) =>
{

    // Creating a Data Object for your Model use
    const data = {
        id: req.params.treeId
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error waterTree:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.affectedRows == 0) {
                return res.status(404).json({message: "Tree not found."});
            }

            else {
                res.status(204).send();
            }
        }
    }

    model.waterTree(data, callback);
}

// Q6 Get Trees by User
module.exports.getTreesByUser = (req, res, next) =>
{
    // Creating a Data Object for your Model use
    const data = {
        user_id: req.params.userId
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error getTreesByUser:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.length == 0) {
                return res.status(404).json({message: "Trees not found."});
            }

            else {
                res.status(200).json(results);
            }
        }
    }

    model.selectTreeByUser(data, callback);
}


// Q6 Get Trees by User
module.exports.averageAge = (req, res, next) =>
{
    // Creating a Data Object for your Model use
    const data = {
        user_id: req.params.id
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error getAverageAge:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.length == 0) {
                return res.status(404).json({message: "No trees found."});
            }

            else {
                res.status(200).json(results);
            }
        }
    }

    model.averageAge(data, callback);
}