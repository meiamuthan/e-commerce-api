const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authSchema = new mongoose.Schema({

    NAME:{type:String,
        unique:true,
        required:[true,'NAME is required'],
        minlength:[4,'CHARACTER must above 4 letter'],
        maxlength:[20,'CHARACTED must below 20']},
    
    PASSWORD:{type:String,
        required:[true,'PASSWORD must required']
     },

     EMAIL:{type:String,
        unique:true,
        required:[true , 'EMAIL is required']
     }

})

authSchema.pre('save',async function(){
if(!this.isModified('PASSWORD'))return
    const salt = await bcrypt.genSalt(10)
this.PASSWORD = await bcrypt.hash(this.PASSWORD,salt)
})

authSchema.methods.CreateJwt=function(){
return jwt.sign({USERID:this._id,NAME:this.NAME},
    process.env.JWT_SECRETKEY,
    {expiresIn:process.env.JWT_LIFETIME})
}




module.exports = mongoose.model('Profile',authSchema)