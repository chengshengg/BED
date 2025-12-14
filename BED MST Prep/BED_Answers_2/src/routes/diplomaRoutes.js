const express = require('express');
const router = express.Router();
const controller = require('../controllers/diplomaController');
const classController = require('../controllers/classController');

//[Paper 1] Q5 - GET Diploma/Summary (Advanced GET SQL)
router.get('/summary', controller.getSummary);

//[Paper 1] Q1 - POST Diploma (Create) 
router.post('/', controller.createDiploma);

//[Paper 1] Q2 - PUT Diploma/:id (Update)
router.put('/:id', controller.updateDiploma);

//[Paper 1] Q3 - DELETE Diploma/:id (Delete)
//[Paper 2] Q3 - DELETE Diploma/:id (Delete + Middleware)
// For Paper 2, to test this route: 
// Use Paper 1's Q1 Create Diploma Route to create a New Diploma without any Classes first
// Then use this new route to try deleting that new Diploma
// Alternatively, delete all classes related to an existing Diploma before trying this route.
router.delete('/:id', 
    classController.checkClassByDiploma, // 1. Check whether there are any classes linked to Dip
    controller.deleteDiploma // 2. Delete Diploma after confirmed no more classes in it
);

// Export Router
module.exports = router;