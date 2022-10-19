import express from "express";
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const app = express();

app.use(express.json())

app.use("/api/posts",postRouter)


app.listen(8800,()=>{
    console.log("Connected")
})