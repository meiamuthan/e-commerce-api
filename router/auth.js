const express = require('express')
const router = express.Router()
const {LogIN , Register,getTask} = require('../contorller/auth')
router.route('/Register').post(Register)
router.route('/Login').post(LogIN)
router.route('/getTask').get(getTask)

module.exports = router