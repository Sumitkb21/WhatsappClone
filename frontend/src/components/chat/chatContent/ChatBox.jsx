import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatFotter from "./ChatFotter";
import { Context } from "../../..";
import { getConversation } from "../../services/Api";

const ChatBox = () => {
  
    const {person,isAuth} =   useContext(Context);
    const [conversation , setConversation] = useState({});



    
    useEffect(()=>{
         const getConversationDetails = async()=>{
             console.log("getdetails" , {senderId:isAuth.sub, receiverId:person.sub});
             let data =  await getConversation({senderId:isAuth.sub , receiverId:person.sub }); 
             console.log("chat box se" , data); // YANHA PR CONVO AA RAHA HAI  
             
             setConversation(data);
             
         }
         getConversationDetails();
    }, [person.sub]);

    return (
    <Box>
      <ChatHeader person={person}/>
      <ChatMessage person ={person}  conversation = {conversation} />
      
    </Box>
  );
};

export default ChatBox;
