import React, { useContext, useState } from 'react'
import  {Box , styled} from '@mui/material'
import { Context } from '../../..'
import HeaderMenu from './HeaderMenu';



import {Chat as MessageIcon , MoreVert} from '@mui/icons-material';
import InfoDrawer from '../../drawer/InfoDrawer';



const Wrapper  = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;

    }

    & :first-child{
        font-size: 1.375rem;
        margin-right: 0.5rem;
        margin-top: 3px;
    }
`;

const Component = styled(Box)`
    height: 2.75rem; 
    background: #ededed;
    padding : 0.5rem 1rem;
    display: flex;
    align-items : center ;

`;

const Image = styled('img')({
    hieght:40,
    width: 40,
    borderRadius: "50%",
})


const Header = () => {
    const [openDrawer , setOpenDrawer] = useState(false);

    const Toggle =()=>{
        setOpenDrawer(true);
    }

    const {isAuth} = useContext(Context);

  return (
    <>
    <Component>
    <Image  src={isAuth.picture}  alt="dp"  onClick={Toggle}/>
    <Wrapper>
        <MessageIcon/>
        <HeaderMenu setOpenDrawer={setOpenDrawer}/>
    </Wrapper>
    </Component>

    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>

  )
}

export default Header
