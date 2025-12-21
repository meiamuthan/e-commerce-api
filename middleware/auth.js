const jwt = require('jsonwebtoken')
// const Profile = require('../database/Auth')
const AuthMiddleWare = async(req,res,next)=>{
const authHeader = req.headers.authorization
if(!authHeader || !authHeader.startsWith('Bearer ')){
   return res.status(400).json({msg:'header is not give'})
}
const token = authHeader.split(' ')[1]

try {
    const payload = jwt.verify(token,process.env.JWT_SECRETKEY )
    req.Profile={userId:payload.USERID,name:payload.NAME}
    console.log(req.PROFILE)
    next()
} catch (error) {
    res.status(400).json({msg:error.message})
}
}
module.exports = AuthMiddleWare


