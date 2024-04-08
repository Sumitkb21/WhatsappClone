import React, { useState } from 'react'
import  {Box} from '@mui/material'
import Header from './header'
import Search from './Search'
import Conversations from './Conversations'


const Menu = () => {
   const  [text , setText] = useState("");

  return (
    <Box>
      <Header/>
      <Search setText={setText}/>
      <Conversations text = {text}/>
    </Box>
  )
}

export default Menu
