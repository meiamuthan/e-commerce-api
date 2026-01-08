const Task = require('../database/model/Task')

const CreateTask=(req,res)=>{
    res.status(200).json({msg:'CreateTask'})
}
const UpdateTask=(req,res)=>{
    res.status(200).json({msg:'UpdateTask'})
}


const DeleteTask=(req,res)=>{
    res.status(200).json({msg:'DeleteTask'})
}

const ReadTask=(req,res)=>{
    res.status(200).json({msg:'ReadTask'})
}



module.exports = {CreateTask,UpdateTask , DeleteTask , ReadTask }