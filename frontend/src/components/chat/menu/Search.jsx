import React from "react";
import { Box, styled } from "@mui/material";
import { Input, Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";

const Component = styled(Box)`
  background: #fff;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-item : center;
`;


const Wrapper  = styled(Box)`
     background-color: #f0f2f5;
     position: relative; 
     margin-top: 5px;
     margin-right:13px; 
     width: 100%;
     border-radius:10px;
`;


const Icon = styled(Box)`
 position: absolute;
 height: 100% ;
 padding: 8px;
 color: #919191

`;


const InputField = styled(InputBase)`
   width: 100%;
   margin-top: 2px;
   padding: 16px;
   padding-left: 3rem;
   height: 15px;
    
   
`;







const Search = () => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon
           />
        </Icon>
        <InputField placeholder="Search..."/>
      </Wrapper>
    </Component>
  );
};

export default Search;
