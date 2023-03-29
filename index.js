//Note install dotenv, nodemon, express and mongoose using (npm i nodemon express mongoose dotenv) before running this
//this dot env shoud be on top
require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose')
// const {MONGO_URL} = require("./key")
const PORT =8000


const app = express();
app.use(express.json())
require('./sendDatatoDb/sendData')
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("connected",()=>{
    console.log("connected with db")
})


app.use(require('./sendDatatoDb/sendData'))

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})