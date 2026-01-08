const user = require('../database/model/Users')
const jwt = require('jsonwebtoken')


const Register=(req,res)=>{
res.status(200).json({msg:'Resgister'})
}


const Login = (req,res)=>{
      res.status(200).json({msg:'Login'})
}



module.exports = {Register , Login}