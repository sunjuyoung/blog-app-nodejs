import express from "express";
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/posts",postRouter)
app.use("/api/auth",authRouter)


app.listen(8800,()=>{
    console.log("Connected")
})