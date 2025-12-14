// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Routes
const diplomaRoutes = require('./diplomaRoutes');
const classRoutes = require("./classRoutes");

// Use Routes
router.use("/diploma", diplomaRoutes);
router.use("/class", classRoutes); //Remember to comment out if not at Section B

module.exports = router;