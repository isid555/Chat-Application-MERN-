import User from "../models/user.model.js";

export const getUserforSideBar = async (req,res)=>{
    try{
    const loggedInuserId = req.user._id;
    const allUsersExceptLoggin = await User.find({_id :{$ne : loggedInuserId}}).select("-password")
    res.status(200).json(allUsersExceptLoggin)
    }catch (error){
        console.log(error)
        res.status(400).json({
            error:"Internal server error"
        })
    }


}


export const getCurrentUser = async (req,res)=>{
    try{
     const id = req.user._id;
     const user = await User.findById(id).select("-password")
        res.status(200).json(user)
    }catch (error){
        res.status(400).json({
            error:"Internal server error"
        })
    }
}