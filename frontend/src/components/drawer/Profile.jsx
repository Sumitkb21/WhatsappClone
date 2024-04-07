import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { Context } from "../..";
import { AccountBalance } from "@mui/icons-material";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  heigth: 200,
  borderRadius: "50%",
  padding: "1.25rem 0 ",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.08);
  & :first-child{
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin : 14px 0;
    color: #4A4A4A
  }

`;

const DescriptionContainer = styled(Box)`
        padding : 15px 20px 28px 30px;
        & > p {
            font-size : 11px;
            color: #8696a0 ;
        }
`;



const Profile = () => {
  const { isAuth } = useContext(Context);

  return (
    <>
      <ImageContainer>
        <Image src={isAuth.picture} alt="Profile" />
      </ImageContainer>
      <BoxWrapper>
        <Typography> Your Name</Typography>
        <Typography> {isAuth.name}</Typography>
      </BoxWrapper>

      <DescriptionContainer>

      <Typography>This is not your username or pin. This name will be visible to your Whatsapp contacts</Typography>
      </DescriptionContainer>

      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Cod-Tea--Code--Tea</Typography>

      </BoxWrapper>
    </>
  );
};

export default Profile;
