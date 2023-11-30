const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system")

const express = require('express')
const app = express()

//for user route
const userRoute = require('./routes/userRoute')
app.use('/',userRoute)

//for admin route
const adminRoute = require('./routes/adminRoute')
app.use('/admin',adminRoute)



app.listen(3000,()=>{
    console.log("Server Started //http localhost:3000");
})
