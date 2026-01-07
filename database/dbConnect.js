const mongoose = require('mongoose')
const connectDb= (url)=>{
mongoose.connect(url).then(()=>{console.log('connected to db')})
.catch((err)=>{console.log('db is not connected',err.message)})}

module.exports = connectDb