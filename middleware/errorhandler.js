const {CustomApiError} = require('../customerror/errorhandler')

const errorhandlermiddleware = (err,req,res,next)=>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(400).json({msg:err.message})
}
module.exports = errorhandlermiddleware