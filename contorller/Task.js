const Task = require('../database/model/Task')

const CreateTask=(req,res)=>{

    res.status(200).json({msg:req.userProfile.name})
}
const UpdateTask=(req,res)=>{
    res.status(200).json({msg:'UpdateTask'})
}

const DeleteTask=(req,res)=>{
    res.status(200).json({msg:'DeleteTask'})
}

const ReadTask=(req,res)=>{
    res.status(200).json({msg:'get all task'})
}

const GetTask=(req,res)=>{
    res.status(200).json({msg:'get single task'})
}


module.exports = {CreateTask,UpdateTask ,GetTask,DeleteTask , ReadTask }