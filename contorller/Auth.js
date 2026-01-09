require('dotenv').config()
const user = require('../database/model/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Register=async(req,res)=>{
try {
const {name,password,email,confirmPassword} = req.body
if(!name || !password || !email){return res.status(400).json({msg:'please enter all filed'})}
if(password !== confirmPassword){
      return res.status(400).json({msg:'password not match'})
}
   const register = await user.create({name,password,confirmPassword,email})
   res.status(201).json({msg:register})

console.log(register)
} catch (error) {
      console.log(error.message)
      res.status(406).json({msg:'please enter all filed ' })
}
}

const Login = async(req,res)=>{

      try {
            const {email , password}= req.body;
if(!email || !password){return res.status(400).json({msg:'please enter email or password crctly'})}
const login = await user.findOne({email })




if(!login){
      return res.status(400).json({msg:'please enter crct email'})
}

const isMatch = await bcrypt.compare(password,login.password);
if(!isMatch){
      return res.status(400).json({msg:'password is not matched'})
}

const token = jwt.sign({name:login.name,email:login.email},process.env.JWT_SECRETKEY,{expiresIn:'1d'})


return res.status(200).json({msg:login , token })


      } catch (error) { 
            res.status(400).json({msg:error.message})
      }
      
}


const userProfile = async(req,res)=>{
      try {
            const profile = await user.find()
            res.status(200).json({msg:profile})
      } catch (error) {
            console.log(error.message)
            res.status(400).json({msg:'not fetched crctly'})
      }
      res.status(200).json({msg:'userprofile'})
}

const deleteProfile = async (req,res)=>{
      try {
            const deleteProfile = await user.deleteMany()
            res.status(200).json({msg:'deleted sucess'})
      } catch (error) {
            res.status(400).json({msg:error.message})
      }
}

module.exports = {Register , Login , userProfile , deleteProfile}