require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./database/dbConnect')
const authRoute = require('./router/auth')
const job = require('./router/task')
 const AuthMiddleWare = require('./middleware/auth')
//middleware
app.use(express.json())

//route
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/task',AuthMiddleWare,job)




const port = 2222 || process.env.PORT

const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
       app.listen(port,console.log( `server is connected to ${port}`))
    } catch (error) {
     console.log(error.message)        
    }
}

start()