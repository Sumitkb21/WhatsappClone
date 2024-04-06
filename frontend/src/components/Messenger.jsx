import React, { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { Context } from "..";
import ChatDialog from "./chat/chatDialog";

const Div = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const Messenger = () => {
  const { isAuth } = useContext(Context);
  return (
    <Div>
      {isAuth ? (
        <>
          <Header>
            <Toolbar>
            <ChatDialog />
            </Toolbar>
          </Header>
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>
              <LoginDialog />
            </Toolbar>
          </LoginHeader>
        </>
      )}
    </Div>
  );
};

export default Messenger;
