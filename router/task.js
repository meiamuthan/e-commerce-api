const express = require('express');
const router = express.Router()



const{Login,dashBoard,CreateTask} = require('../contorller/admin');
const authMiddlera = require('../middleware/auth');



    router.route('/').get(authMiddlera,dashBoard).post(Login)
    router.route('/id').post(CreateTask)
    
    module.exports = router