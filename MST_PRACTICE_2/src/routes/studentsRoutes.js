// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const studentsController = require('../controllers/studentsController');
const classController = require('../controllers/classController');

router.post("",
    classController.checkClass,
    studentsController.createStudent
)

router.put("/:id", 

    classController.checkClass,
    studentsController.updateStudent
)
module.exports = router;