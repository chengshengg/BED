const express = require('express');
const router = express.Router();

const diplomaRoutes = require('./diplomaRoutes');
const classRoutes = require('./classRoutes');

router.use('/diploma', diplomaRoutes);
router.use('/class', classRoutes);

module.exports = router;