import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import ChatFotter from "./ChatFotter";

import { Context } from "../../..";
import { getMessages, newMessage } from "../../services/Api";
import Message from "./Message.jsx";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;


const Container = styled(Box)`
      padding: 3px 2rem;
 `;

const ChatMessage = ({ person, conversation }) => {
 
 
  

  const [messages , setMessages] = useState([]);
  const [flag , setFlag] = useState(false);
 
 
  const [value, setValue] = useState("");
 
  // console.log("this is id " ,conversation._id);
 
  const { isAuth } = useContext(Context);
 

  useEffect(() => {
      const getMessageDetails = async()=>{
        let data  = await getMessages(conversation._id);
        // console.log("this is your message" , data);
        setMessages(data);
      }
      conversation._id && getMessageDetails();
  }, [person._id , conversation._id , flag ]); 


  const sendText = async(e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: isAuth.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      console.log(message);
      await newMessage(message);
      setValue("");
      setFlag(prev => !prev);
    }
  };


  return (
    <Wrapper>
      <Component>

        {
          messages &&  messages.map(message =>(
            <Container>
            <Message message={message}/>
            </Container>
          ))
        }
      </Component>
      <ChatFotter sendText={sendText} setValue={setValue} value={value}/>
    </Wrapper>
  );
};

export default ChatMessage;
