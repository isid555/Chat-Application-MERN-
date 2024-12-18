import ConversationModel from "../models/conversation.model.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import {getReceiverSocketId} from "../socket/socket.js";
import {io} from "../socket/socket.js";

export  const sendMessage = async (req,res)=>{
    try{
    const {message} = req.body;
    const {id:receiverId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants: {$all :[senderId,receiverId]}
    })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }


        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })


       await newMessage.save()

            conversation.messages.push(newMessage._id)

        await  conversation.save();




        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)

        }

        res.status(200).json(newMessage)

    }catch (error){
        console.log("Error",error.message)
        res.status(500).json({
            error:"Internal Server error"
        })
    }
}


export const getMessages = async (req,res)=>{
    try{
    const {id:userToChatId} = req.params
        const senderId = req.user._id;
    const conversation = await Conversation.findOne({
        participants: {$all:[senderId,userToChatId]}
    }).populate("messages")
        res.status(200).json(conversation.messages)
    }catch (error){
        console.log(error)
        res.status(400).json({
            error:"Internal server error"
        })
    }
}