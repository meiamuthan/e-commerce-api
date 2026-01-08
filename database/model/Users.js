const mongoose = require('mongoose')

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
      unique:true,
      trim: true,
      
    },

    email: {
      type: String,
     require:[true , 'please enter email  unique'],
      unique:true,
       maxlength:30
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Users', UserSchema)
