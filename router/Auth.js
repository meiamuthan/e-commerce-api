const express = require('express');
const router = express.Router()



const{RegisterUser , LoginUser , getAllUser , deleteProfile} = require('../contorller/Auth');

    router.route('/').get(getAllUser)
    router.route('/Login').post( LoginUser)
    router.route('/Register').post(RegisterUser)
  router.route('/:id').delete(deleteProfile)
    
    module.exports = router