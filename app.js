require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./database/dbConnect')
const Auth = require('./router/task')
const Task = require('./router/task')
const routenotfound = require('./middleware/routenotfound')
const errorhandlermiddleware = require('./middleware/errorhandler')
app.use(express.json())


app.use('/api/v1/users',Auth)
app.use('/api/v1/task' , Task)

app.use(routenotfound)

app.use(errorhandlermiddleware)
const port =  process.env.PORT  || 2222 

const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
       app.listen(port,console.log( `server is connected to ${port}`))
    } catch (error) {
     console.log(error.message)        
    }
}

start()