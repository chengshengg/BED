// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const treeController = require('../controllers/treesController');
const userController = require('../controllers/usersController');

// Q5: Water Tree
// We import treeController because we want to re-use tree model from Q4 Get Tree
router.put('/:userId/trees/:treeId/water', 
    treeController.checkOwnership, //New Controller, re-use model from Q4
    userController.waterTree);


// Q6 : GET All Trees owned by Specific User
router.get('/:userId/trees', userController.getTreesByUser);

// Q7 : GET Average Age
router.get('/:id/trees/average-age', userController.averageAge);

module.exports = router;