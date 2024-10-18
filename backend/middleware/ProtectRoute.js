import jwt from 'jsonwebtoken'
import User from "../models/user.model.js";


const protectRoute = async (req,res,next) =>{
    try{
    const token = req.cookies.jwt;
    if(!token){
        res.status(400).json({
            error:"UnAuthorised -No Token provided"
        })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET )
        if(!decoded){
            res.status(400).json({
                error:"UnAuthorised -Invalid Token provided"
            })
        }

        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(400).json({
                error:"UnAuthorised user"
            })
        }


        req.user = user;
        next();



    }catch (error){
        console.log(error)
        res.status(400).json({
            error:"UnAuthorised error"
        })
    }
}
export default protectRoute;