const express = require('express');
const router = express.Router();
const controller = require('../controllers/diplomaController');

//Q5 - GET Diploma/Summary (Advanced GET SQL)
router.get('/summary', controller.getSummary);

//Q1 - POST Diploma (Create) 
router.post('/', controller.createDiploma);

//Q2 - PUT Diploma/:id (Update)
router.put('/:id', controller.updateDiploma);

//Q3 - DELETE Diploma/:id (Delete)
router.delete('/:id', controller.deleteDiploma);

module.exports = router;