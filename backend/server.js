import express from 'express';
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.routes.js";
import connectToMDB from "./db/connectToMDB.js";

const  app = express();
app.use(express.json())
dotenv.config()
const PORT =process.env.PORT || 5000

app.use("/api/auth",authRoutes)

app.get("/" , (req,res)=>{
    res.send("Hi therew")
})


app.listen(PORT , ()=>{
    connectToMDB();
    console.log(`Running on port ${PORT}`)
})