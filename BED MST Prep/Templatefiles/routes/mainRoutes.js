const express = require('express')
const router = express.Router()
const playerRoutes = require('./playerRoutes')
const respone = require('../middleware/response')

router.use("/player", playerRoutes);

module.exports = router