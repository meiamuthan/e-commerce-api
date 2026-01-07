const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter task name'],
      maxlength: 80,
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Please enter password'],
      trim: true,
      
    },

    taskDone: {
      type: Boolean,
     
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
