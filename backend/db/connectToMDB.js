import mongoose from "mongoose";


const connectToMDB = async () => {
    try{
    mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to MongoDB")
    }catch (error){
        console.log("Connection in moongoDB problem",error.message)
    }
}
export  default  connectToMDB;