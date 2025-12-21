const JOBS = require('../database/Task')

  /*fetch single task */
const getTask= async (req,res)=>{
    
 try {
        const task = await JOBS.findOne({
              _id:req.params.id,            
            CreatedBy:req.Profile.userId
            
        })
        .populate('CreatedBy','NAME EMAIL')
        console.log('req.params.id',req.params.id)
        console.log('req.Profile.userId',req.Profile.userId)
        if(!task){
           return res.status(400).json({msg:'task not find by that id'})
        }
        return res.status(200).json({msg:task})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }

      
    
}


 /*create task */

const createTask= async(req,res)=>{
    try {
        req.body.CreatedBy = req.Profile.userId
        const job = await JOBS.create(req.body)
        console.log(job)
        return res.status(200).json({msg:job})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
   
}

 /*fetch all task */

const getAllTask=async(req,res)=>{
    try {
        const task = await JOBS.findOne()
       if(!task){ res.status(400).json({msg:'task not found'})}
        return res.status(200).json({msg:task})
      
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
   res.status(200).json({msg:'getalltask'})
}

        // update failed = task not created

const UpdateTask=async(req,res)=>{
    const {body:{COMPANY,POSITION}},
    user:{USERID},
    params:{id:jobid}=req

res.status(200).json({msg:'updatetask'})
}










const deleteTask=async(req,res)=>{
    try {
        const task = await JOBS.findByIdAndDelete({
            _id:req.params.id
            
        },req.body)
        if(!task)return res.status(200).json({msg:'no task exit'})
            return res.status(200).json({del:'sucessley deleted',msg:task})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
    
}
module.exports = {createTask,getTask,getAllTask,UpdateTask,deleteTask}