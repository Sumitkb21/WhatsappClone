import { Box } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatFotter from "./ChatFotter";

const ChatBox = () => {
  return (
    <Box>
      <ChatHeader />
      <ChatMessage />
      <ChatFotter />
    </Box>
  );
};

export default ChatBox;
