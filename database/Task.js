const mongoose = require('mongoose')
const JobsSchema = new mongoose.Schema({
    COMPANY:{required:[true,'please enter company'],type:String,maxlength:10},
    POSITION:{required:[true , 'please enter position'],type:String,maxlength:10},
    STATUS:{required:[true,'please enter status'],type:String,enum:['interview','pending','completed'],default:'pending'},
    CreatedBy:{type:mongoose.Types.ObjectId,ref:'Profile',required:[true , 'job must be created by user']}},
{timestamps:true}
)

module.exports =mongoose.model('JOB',JobsSchema)