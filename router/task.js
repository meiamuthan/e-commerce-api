
const express = require('express');
const router = express.Router()



const{CreateTask,UpdateTask ,GetTask, DeleteTask , ReadTask } = require('../contorller/Task');
const authMiddleware = require('../middleware/auth')

router.use(authMiddleware)

    router.route('/task').
        get(ReadTask).
        post(CreateTask)
    router.route('/task/:id').
        delete(DeleteTask).
        patch(UpdateTask).
        get(GetTask)
    
    module.exports = router