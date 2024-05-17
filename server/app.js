const express=require('express')
const cors=require('cors')
const mongoose = require('mongoose')

const port=90;

const app = express()
app.use(cors())
const user=require('./routes/user')

app.use(express.json())
app.use(user)

app.get('/',(req,res)=>{
    res.send("Welcome Captain...")
})
// app.get('/login',(req,res)=>{
//     res.send("Login to our website...")
// })

mongoose.connect("mongodb://localhost:27017/HeritageHub")
.then(()=>{
    console.log("Connected to DB...")
    app.listen(port,()=>console.log("listening to port",port))
})