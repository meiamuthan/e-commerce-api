
const express = require('express');
const router = express.Router()



const{CreateTask,UpdateTask , DeleteTask , ReadTask } = require('../contorller/Auth');



    router.route('/').get(ReadTask)
    router.route('/:id').post(CreateTask).delete(DeleteTask).patch(UpdateTask)
    
    module.exports = router