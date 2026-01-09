const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique:true,
      required: [true, 'Please enter  name'],
      maxlength: 80,
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Please enter password'],
      
      trim: true,
      
    },



    email: {
      type: String,
     required:[true , 'please enter email  unique'],
      unique:true,
      trim:true,
       maxlength:30
    },
  },
  { timestamps: true }
)



UserSchema.pre('save',async function(){
  if(!this.isModified('password')) return 
this.password = await bcrypt.hash(this.password,(10))

  })

module.exports = mongoose.model('Users', UserSchema)
