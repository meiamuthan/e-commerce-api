const mongoose = require('mongoose')
const TaskModel = new mongoose.Schema({

    Title:{
        require:[true,'please enter title'],
        type:String,
        trim:true,
        maxlength:100,

    },
    description:{
        require:[true,'please enter description'],
        type:String,
        trim:true,
        maxlenght:100
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        trim:true,
        required:true,

    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        trim:true,
        required:true,

    }},
{timestamps:true}
)

module.exports = mongoose.model('Task',TaskModel)