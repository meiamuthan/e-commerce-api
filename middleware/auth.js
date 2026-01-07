const jwt = require('jsonwebtoken')

const authMiddlera = (req,res,next)=>{
    try {
  const authHeader = req.headers.authorization;
  console.log(authHeader)
if(!authHeader || !authHeader.startsWith('Bearer')){
   return res.status(401).json({msg:'Unauthorized',msg:error.message})
}
const token = authHeader.split(' ')[1]
console.log(token)
    const decoded = jwt.verify(token,process.env.JWT_SECRETKEY)
    req.user = {id:decoded.id,name:decoded.name};
next()
    
    } catch (error) {
        console.log(error.message)
    res.status(400).json({msg:'please provide header'})    
    }
}

module.exports = authMiddlera