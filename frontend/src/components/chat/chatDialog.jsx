import React from "react";
import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import Emptychat from "./chatContent/Emptychat";



const Component = styled(Box)`
        display : flex;
`
;



const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};



const LeftComponent = styled(Box)`
        min-width: 25rem;
`;

const RightComponent = styled(Box)`

 width :73%;
 min-width: 18.75rem;
 height: 100%;
 border-left: 1px solid rgba(0,0,0,0.14);


`;


const ChatDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
      
      <Component>

      <LeftComponent>
        <Menu />
      </LeftComponent>

      <RightComponent>
        <Emptychat/>
      </RightComponent>

      </Component>
    </Dialog>
  );
};

export default ChatDialog;
