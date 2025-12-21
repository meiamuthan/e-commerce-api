const mongoose = require('mongoose')
const connectDb= (url)=>{
mongoose.connect(url).then(()=>{console.log('connected to db')}).catch((err)=>{console.log(err)})
}

module.exports = connectDb