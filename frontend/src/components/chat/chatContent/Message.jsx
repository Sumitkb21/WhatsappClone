import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formatData } from "../../utils/common-utils";
import { Context } from "../../..";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

const Message = ({ message }) => {
  const { isAuth } = useContext(Context);

  return (
    <>
      {isAuth.sub === message.senderId ? (
        <Own>
          <Text>{message.text}</Text>
          <Time> {formatData(message.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{message.text}</Text>
          <Time> {formatData(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
};

export default Message;
