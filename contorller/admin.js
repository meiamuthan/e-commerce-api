const Task = require('../database/Task')
const jwt = require('jsonwebtoken')
const {CreateCustomError} = require('../customerror/errorhandler')



const Login=async(req,res)=>{
try { 
      const login = await Task.create(req.body)
        const token = jwt.sign({id:login._id,name:login.name},process.env.JWT_SECRETKEY , {expiresIn:'1d'})
      return res.status(200).json({msg:login , token})

 } catch (error) {
        res.status(400).json({msg:error.message})
      }         
}

const dashBoard = (req,res)=>{
const luckynumber = Math.floor(Math.random()*20)

      res.status(200).json({msg:`Congragulation Mr:${req.user.name}youre lucky number is ${luckynumber}`})
}

const CreateTask = (req,res)=>{
      res.status(200).json({msg:'created task'})
}

        
module.exports = {Login,dashBoard,CreateTask}