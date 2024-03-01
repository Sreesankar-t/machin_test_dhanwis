import express from 'express'
import mongoose from 'mongoose'
 const app =express()
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
const PORT = 8000


const connection =()=>{
    mongoose.connect('mongodb+srv://sree:222@cluster0.e2oawtv.mongodb.net/');
    console.log("mogodb connected");
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

app.use('/user',userRoutes)




app.use('/',(req,res)=>{
    res.send("HELLO")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connection()
})
