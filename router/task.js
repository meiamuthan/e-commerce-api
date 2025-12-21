const express = require('express')
const router = express.Router()
const {createTask,getTask,getAllTask,UpdateTask,deleteTask} = require('../contorller/task')
router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask)
module.exports = router


//app.use('/api/v1/task',AuthMiddleWare,job)