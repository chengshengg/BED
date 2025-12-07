// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Controller
const diplomaController = require('../controllers/diplomaController');

router.post("",
    diplomaController.createDiploma
)
router.put("/:id",
    diplomaController.updateDiploma
)
router.delete("/:id",
    diplomaController.deleteDiploma
)
module.exports = router;