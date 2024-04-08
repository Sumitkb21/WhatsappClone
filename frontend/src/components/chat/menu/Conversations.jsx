import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../services/Api';

import {Box , styled , Divider} from "@mui/material"
import Conversation from './Conversation';
import { Context } from '../../..';



const Component  =styled(Box)`
height:81vh;
overflow: overlay;

`;

const StyledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background : #e9edef;
        opacity: .6;
`;



const Conversations = ({text}) => {


     const {isAuth} = useContext(Context);

    const [users , setUsers] = useState([]);  
  
    useEffect(()=>{
        const fetchData = async ()=>{
            let allUser = await getUsers();
            console.log(allUser);
            const filteredData = allUser.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }

        fetchData();
  } , [text]);
  
    return (
        <Component>
            {
                users.map(user =>(
                
                    (user.sub !== isAuth.sub )&&   
                    <>  
                    <Conversation user = {user} />
                    <StyledDivider/>
                    </>
                  
 
                ))

            }
        </Component>
  )
}

export default Conversations
