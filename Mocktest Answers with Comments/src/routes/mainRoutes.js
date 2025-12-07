// Import Modules
const express = require('express'); //server
const router = express.Router(); //router part of server

// Import Routes
const treeRoutes = require('./treesRoutes');
const userRoutes = require("./usersRoutes");

// Use Routes
router.use("/trees", treeRoutes);
router.use("/users", userRoutes); //Remember to comment out if not at Section B

module.exports = router;