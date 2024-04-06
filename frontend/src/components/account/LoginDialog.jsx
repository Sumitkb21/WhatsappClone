import React, { useContext } from "react";

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data.js";


import {GoogleLogin } from '@react-oauth/google';

import {jwtDecode} from 'jwt-decode';
import { Context } from "../../index.js";

const Components = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyleList = styled(List)`

    & > li {
      padding: 0;
      margin-top: 15px;
      font-size: 20px;
      line-hegiht: 28px;
      color: #4a4a4a;
    }


`;

const QRCode = styled('img')({
  height: 264,
  width: 264,
  margin: '56px 0 56px 56px'
});


const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor :'none'   
};

const LoginDialog = () => {


    const {setIsAuth} = useContext(Context);

    const onLoginSuccess = (res)=>{
        const decode  = jwtDecode(res.credential);
        // console.log(decode);
        setIsAuth(decode);
    }
    const onLoginError = (res)=>{
console.log("Login Failed " , res);
    }



  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}  
    hideBackdrop={true}
    >
      <Components>
        <Container>
          <Title> Use Whatsapp on your computer: </Title>
          <StyleList>
            <ListItem>1. Open WhatsApp on your Phone</ListItem>
            <ListItem>2. Tap Menu : on Android, or Settings on iPhone</ListItem>
            <ListItem>3. Tap Linked devices and then Link a device </ListItem>
            <ListItem>
              4. Point your phone at this screen to capture the QR code
            </ListItem>
          </StyleList>
        </Container>

        <Box style={{position: 'relative'}}>
          <QRCode src={qrCodeImage} alt="qr code" />
        
          <Box style={{
            position: 'absolute',
            top: '45%', 
            transform: 'translateX(50%)' 
          }}>
          <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
          
          />
          </Box>
       
        </Box>
      </Components>
    </Dialog>
  );
};

export default LoginDialog;
