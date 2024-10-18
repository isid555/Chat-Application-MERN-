import express from 'express';
import dotenv from 'dotenv'
import cookieparser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import connectToMDB from "./db/connectToMDB.js";
import messageRoutes from "./routes/message.routes.js";

const  app = express();
app.use(express.json())
app.use(cookieparser())
dotenv.config()
const PORT =process.env.PORT || 5000

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.get("/" , (req,res)=>{
    res.send("Hi therew")
})


app.listen(PORT , ()=>{
    connectToMDB();
    console.log(`Running on port ${PORT}`)
})