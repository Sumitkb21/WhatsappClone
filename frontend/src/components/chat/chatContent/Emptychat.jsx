import React from "react";
import { Box, Typography, styled , Divider } from "@mui/material";
import { emptyChatImage } from "../../../constants/data.js";

const Component = styled(Box)`
  background: #f8f9fe;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;


const StyleDivider = styled(Divider)`
margin: 40px 0;
opacity:0.4;
`;

const Title = styled(Typography)`
 font-size: 32px;
 margin:25px 0 10px 0;
 font-family: inherit;
 font-weight:300;
 color: #41525d;
`;



const Container = styled(Box)`
  padding: 0 200px;
`;
const Image = styled("img")({
  width: 400,
  marginTop: 200,
});

const Emptychat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="Empty chat Image" />
        <Title>WhatsApp Web</Title>
        <StyleDivider/>
      </Container>
    </Component>
  );
};

export default Emptychat;
