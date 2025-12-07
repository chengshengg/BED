const express = require('express');
const router = express.Router();
const diplomaController = require('../controllers/diplomaController');
const classController = require('../controllers/classController')

// Q4 - POST Class (Create)
// 1. We have to first check if Diploma exists using getDiploma / checkDiploma 
// 2. Then create Class with that Diploma once we know it exists and store the new Class ID. 
// 3. After creating Class, we use GET Class to get the data by ID from database organically.
router.post('/', 
    diplomaController.getDiplomaById, 
    classController.createClass,
    classController.getClassById);

module.exports = router;