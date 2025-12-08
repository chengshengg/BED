// Import Modules
const express = require('express');
const router = express.Router();

// Import Main Routes
const diplomaRoutes = require('./diplomaRoutes');
const classRoutes = require('./classRoutes');
const studentRoutes = require('./studentRoutes');

// Use Main Routes
router.use('/diploma', diplomaRoutes);
router.use('/class', classRoutes);
router.use('/student', studentRoutes);

// Export Router
module.exports = router;