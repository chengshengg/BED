const express = require('express');
const router = express.Router();
const diplomaController = require('../controllers/diplomaController');
const classController = require('../controllers/classController');
const studentController = require('../controllers/studentController');

//[Paper 1] Q4 - POST Class (Create)
// 1. We have to first check if Diploma exists using getDiploma / checkDiploma 
// 2. Then create Class with that Diploma once we know it exists and store the new Class ID. 
// 3. After creating Class, we use GET Class to get the data by ID from database organically.
router.post('/', 
    diplomaController.getDiplomaById, 
    classController.createClass,
    classController.getClassById
);

//[Paper 2] Q4 - DELETE Class (Delete)
// Same thing, use Paper 1 Q4 to Create a new Class with no Students to test this Delete Route
router.delete('/:id', 
    studentController.checkStudentByClass, // 1. Check whether any students are linked to this class
    classController.deleteClass // 2. Delete the Class after ensuring no more students
);

//[Paper 2] Q5 - GET Class Population (Advanced GET SQL)
router.get('/population', classController.getPopulation);


// Export Router
module.exports = router;