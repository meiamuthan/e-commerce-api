require('dotenv').config()
const jwt = require('jsonwebtoken')
const authMiddleware=(req,res,next)=>{
const authHeader = req.headers.authorization;
if(!authHeader || !authHeader.startsWith('Bearer')){
    return res.status(400).json({msg:'authorization is required'})
}
const token = authHeader.split(' ')[1]
try {
    const payload = jwt.verify(token , process.env.JWT_SECRETKEY)
    req.userProfile = {name:payload.name,id:payload.id , email:payload.email}
    next()
} catch (error) {
    return res.status(400).json({msg:'invalid token'})
}
};
module.exports = authMiddleware;