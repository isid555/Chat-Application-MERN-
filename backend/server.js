import express from 'express';
import dotenv from 'dotenv'
import cookieparser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import connectToMDB from "./db/connectToMDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from "path"
import {app,server,io} from "./socket/socket.js";
app.use(express.json())
app.use(cookieparser())
dotenv.config()
const PORT =process.env.PORT || 5000
const __dirname = path.resolve()
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"frontend/dist")))


app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT , ()=>{
    connectToMDB();
    console.log(`Running on port ${PORT}`)
})