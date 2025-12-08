// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Routes
const studentsRoutes = require('./studentsRoutes');
const diplomaRoutes = require('./diplomaRoutes')

// Use Routes
router.use("/student", studentsRoutes);
router.use("/diploma", diplomaRoutes)

module.exports = router;