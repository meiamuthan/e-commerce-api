const express = require('express');
const router = express.Router()



const{Register , Login} = require('../contorller/Auth');



    router.route('/Login').post(Login)
    router.route('/Register').post(Register)
    
    module.exports = router