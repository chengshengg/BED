// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const classController = require('../controllers/classController');
const diplomaController = require('../controllers/diplomaController');

router.post("",
    diplomaController.getDiploma,
    classController.createClass,
    classController.selectClass
)

module.exports = router;