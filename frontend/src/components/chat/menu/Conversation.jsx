import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Context } from "../../..";
import { setConversation } from "../../services/Api";

const Component = styled(Box)`
  display: flex;
  height: 3rem;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user }) => {
    const {person , setPerson , isAuth}  = useContext(Context);
    
    
    const getuser  = async() =>{
      setPerson(user);
      await setConversation({senderId:isAuth.sub , receiverId: user.sub});
    } 
 
    return (


    <Component   onClick={()=>getuser(user)}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name} </Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
