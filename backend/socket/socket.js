import {Server} from "socket.io";
import http from 'node:http'
import express from "express";
import cors from "cors";

const  app = express();




const userSocketMap = {} // userId : socketId
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["POST","GET"],
        credentials:true
    }
})

io.on('connection',(socket)=>{
    console.log("a user is connect",socket.id)

    const userId = socket.handshake.query.userId;
    if(userId !== undefined){
        userSocketMap[userId] = socket.id
    }

    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on('disconnect',()=>{
        console.log("a user disconnected",socket.id)
        delete userSocketMap[userId]

        io.emit("getOnlineUsers",Object.keys(userSocketMap));

    })
})

export const getReceiverSocketId =(receiverId) =>{
    return userSocketMap[receiverId]
}

export {app,io,server}