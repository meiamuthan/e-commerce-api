const express = require('express');
const router = express.Router()



const{Register , Login , userProfile , deleteProfile} = require('../contorller/Auth');

    router.route('/').get(userProfile)
    router.route('/Login').post( Login)
    router.route('/Register').post(Register)
  router.route('/:id').delete(deleteProfile)
    
    module.exports = router