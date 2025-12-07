// Import Model (for Database)
const model = require("../models/treesModel");

// Q1 Create Tree
module.exports.createTree = (req, res, next) =>
{
    // Status 400: POSTMAN INPUT CHECK (Request Body)
    if(req.body.species == undefined || 
        req.body.age == undefined ||
        req.body.height == undefined ||
        req.body.user_id == undefined)

    {
        res.status(400).json({message: "Missing required data."});
        return;
    }

    // Creating a Data Object for your Model use
    const data = {
        species: req.body.species,
        age: req.body.age,
        height: req.body.height, 
        user_id: req.body.user_id
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error createTree:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {
            res.status(201).json({
                message: "Tree created successfully.",
                treeId: results.insertId // insertId = newly created tree id
            });
        }
    }

    model.insertSingle(data, callback);
}

// Q2 Delete Tree
module.exports.deleteTree = (req, res, next) =>
{

    // Creating a Data Object for your Model use
    const data = {
        id: req.params.id
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error deleteTree:", error);
            return res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.affectedRows == 0) { //affectedRows = deleted rows
                return res.status(404).json({message: "Tree not found."});
            }
            
            else {
                return res.status(204).send();
            }
            
        }
    }

    model.deleteById(data, callback);
}

// Q3 Update Tree
module.exports.updateTree = (req, res, next) =>
{
    // Status 400: POSTMAN INPUT CHECK (Request Body)
    if(req.body.species == undefined || 
        req.body.age == undefined ||
        req.body.height == undefined ||
        req.body.user_id == undefined)
    {
        res.status(400).json({message: "Missing required data."});
        return;
    }

    // Creating a Data Object for your Model use
    const data = {
        species: req.body.species,
        age: req.body.age,
        height: req.body.height, 
        user_id: req.body.user_id, 
        id: req.params.id
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error updateTree:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.affectedRows == 0) { //affectedRows = deleted rows
                return res.status(404).json({message: "Tree not found."});
            }

            else {
                res.status(204).send();
            }
        }
    }

    model.updateById(data, callback);
}

// Q4 Get Tree
module.exports.getTree = (req, res, next) =>
{
    // Creating a Data Object for your Model use
    const data = {
        id: req.params.id
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error getTree:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.length == 0) { //Results Array of Tree Objects = 0
                return res.status(404).json({message: "Tree not found."});
            }

            else {
                res.status(200).json(results);
            }
        }
    }

    model.selectById(data, callback);
}

// Q5 Check Ownership
module.exports.checkOwnership = (req, res, next) =>
{
    // Creating a Data Object for your Model use
    const data = {
        id: req.params.treeId
    }

    const callback = (error, results, fields) => {

        // SQL Error
        if (error) {
            console.error("Error checkOwnership:", error);
            res.status(500).json({message: "Internal server error."});
        } 
        

        // Success 
        else {

            if (results.length == 0) { // Results Array of Tree Object = 0
                return res.status(404).json({message: "Tree not found."});
            }

            else {

                // Error handling for 403
                if (results[0].user_id != req.params.userId) {
                    res.status(403).json({message: "Tree does not belong to user."})
                }

                else next();
            }
        }
    }

    model.selectById(data, callback);
}