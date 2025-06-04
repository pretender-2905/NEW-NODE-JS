import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

// checking whether mongodb connected or not
console.log("MONGODB URI-->", process.env.MONGODBURI)

app.use(express.json())
app.use(morgan("tiny"))

mongoose.connect(process.env.MONGODBURI)
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log("error in connecting mongo db-->",err))

app.get("/", (req, res)=>{
res.send("server is runing")
})

app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`))