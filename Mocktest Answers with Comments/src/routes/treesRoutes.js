// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const controller = require('../controllers/treesController');

// Q1: Create Tree
router.post('/', controller.createTree);

// Q2: Delete Tree
router.delete('/:id', controller.deleteTree);

// Q3: Update Tree
router.put('/:id', controller.updateTree);

// Q4: GET Specific Tree
router.get('/:id', controller.getTree);


module.exports = router;