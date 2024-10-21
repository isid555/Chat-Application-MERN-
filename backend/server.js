import express from 'express';
import dotenv from 'dotenv'
import cookieparser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import connectToMDB from "./db/connectToMDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import {app,server,io} from "./socket/socket.js";
app.use(express.json())
app.use(cookieparser())
dotenv.config()
const PORT =process.env.PORT || 5000

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.get("/" , (req,res)=>{
    res.send("Hi therew")
})


server.listen(PORT , ()=>{
    connectToMDB();
    console.log(`Running on port ${PORT}`)
})