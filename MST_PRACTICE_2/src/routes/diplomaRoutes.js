// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const diplomaController = require('../controllers/diplomaController');
const classController = require('../controllers/classController');

router.post("",
    diplomaController.createDiploma
)
router.put("/:id",
    diplomaController.updateDiploma
)
router.delete("/:id",
    classController.checkClassInDiploma,
    diplomaController.deleteDiploma
)
module.exports = router;