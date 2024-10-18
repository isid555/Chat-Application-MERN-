import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import generateTokenandSetCookie from "../utils/generateToken.js";
import generateToken from "../utils/generateToken.js";
export const signup = async (req,res) =>{
    try {
        const  {fullName,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"})
        }

        const user = await User.findOne({username} )
        if(user){
            return res.status(400).json({error:"User exists"})
        }
        //HASH PASSWORD HERE
    const salt =  await bcryptjs.genSalt(10);
        const hashedpassword = await bcryptjs.hash(password,salt);



        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        // const  newUser = new User({
        //     fullName,
        //     username,
        //     password,
        //     gender,
        //     profilePic : gender==='male' ? boyProfilePic : girlProfilePic
        // })
        // await newUser.save();

        const newUser = await User.create({
            fullName,
            username,
            password:hashedpassword ,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        });

       if(newUser){
           //Generate JWT Token
           generateTokenandSetCookie(newUser._id , res);

           res.status(201).json({
               _id:newUser._id,
               fullName:newUser.fullName,
               username :newUser.username,
               profilePic:newUser.profilePic

           })
       }else{
        res.status(400).json({error:"Invalid user data"})
       }


    }catch (error){
        console.log(error)
        res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}
export const login = async  (req,res)=>{

    try{
        const {username,password} = req.body;
    const user = await User.findOne({username})
        const isPasswordCorrect = await bcryptjs.compare(password,user.password || "");
    if(!user || !isPasswordCorrect){
        return res.status(400).json({
            error:"Invalid username or password"
        });
    }

    generateTokenandSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username :user.username,
            profilePic:user.profilePic

        })


    }catch (error){
        console.log(error)
        res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}
export const logout = (req,res) =>{
   try{
       res.cookie("jwt","",{maxAge:0})
       res.status(200).json({
           message:"Logged out successfully"
       })
   }catch (error){
       res.status(500).json({
           error:error
       })
   }
}