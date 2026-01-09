require('dotenv').config()
const User = require('../database/model/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {StatusCodes} = require('http-status-codes');
const RegisterUser=async(req,res)=>{
try {
const {name,password,email,confirmPassword} = req.body

if(!name || !password || !email){

      return res.status(StatusCodes.BAD_REQUEST).json({msg:'please enter all filed'})}

if(password !== confirmPassword){

      return res.status(StatusCodes.BAD_REQUEST).json({msg:'password not match'})

}
   const NewUser = await User.create({name,password,email})
   res.status(StatusCodes.CREATED).json({msg:NewUser})


} catch (error) {

      console.log(error.message)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Cannot Created new User' })
}
}

const LoginUser = async(req,res)=>{

      try {
            const {email , password}= req.body;
if(!email || !password){
      
      return res.status(400).json({msg:'please enter email or password crctly'})
}

 const FoundUser = await User.findOne({email })


 if(!FoundUser){
      return res.status(StatusCodes.NOT_FOUND).json({msg:'please enter crct email'})
}

const isMatch = await bcrypt.compare(password,FoundUser.password);

if(!isMatch){
      return res.status(StatusCodes.UNAUTHORIZED).json({msg:'password is not matched'})
}

const token = jwt.sign({name:FoundUser.name,email:FoundUser.email},process.env.JWT_SECRETKEY,{expiresIn:'1d'})



console.log(token)
      return res.status(StatusCodes.OK).json({msg:FoundUser  })

} catch (error) { 

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'fetch to fetch all users'})
      }
      
}



//get all user

const getAllUser = async(req,res)=>{
      try {
            const AllUser = await User.find()
            res.status(StatusCodes.OK).json({msg:AllUser})
      } catch (error) {
            console.log(error.message)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'not fetched crctly'})
      }
      res.status(StatusCodes.OK).json({msg:AllUser})
}

const deleteProfile = async (req,res)=>{
      try {
            const deleteProfile = await User.deleteMany()
            res.status(200).json({msg:'deleted sucess'})
      } catch (error) {
            res.status(400).json({msg:error.message})
      }
}

module.exports = {RegisterUser , LoginUser , getAllUser , deleteProfile}