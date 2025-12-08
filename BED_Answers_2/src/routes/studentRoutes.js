// Import Modules
const express = require('express');
const router = express.Router();

// Import Controllers
const studentController = require('../controllers/studentController');
const classController = require('../controllers/classController');

//[Paper 2] Q1 - POST Student (Create) 
router.post('/', 
    classController.checkClassById, // 1. Check whether Class exists first
    studentController.createStudent // 2. Create a new Student for that Class
);

//[Paper 2] Q2 - PUT Student (Update) 
router.put('/:id', 
    classController.checkClassById, // 1. Check whether Class exists first
    studentController.updateStudent // 2. Update the Student to that Class
);

// Export Router
module.exports = router;