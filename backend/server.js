require('dotenv').config()      // attaches the env variables to process object

const express = require('express')
const cors = require("cors");
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.method, req.body)
//     next()
// })


//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db')
        //listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening to port', process.env.PORT)
        })
    })
    .catch(err => console.log("error hai"))

