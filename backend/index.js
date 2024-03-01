import express from 'express'
import mongoose from 'mongoose'
 const app =express()
import userRoutes from './routes/userRoutes.js'
const PORT = 8000


const connection =()=>{
    mongoose.connect('mongodb+srv://sree:222@cluster0.e2oawtv.mongodb.net/');
    console.log("mogodb connected");
}


app.use('/user',userRoutes)




app.use('/',(req,res)=>{
    res.send("HELLO")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connection()
})
