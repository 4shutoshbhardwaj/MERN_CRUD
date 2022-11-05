import React from 'react'
import {AppBar,Toolbar,Box,styled} from '@mui/material';
import { Link } from 'react-router-dom';

const Header=styled(AppBar)`
    background-color:#111111;
    position:static;
`

const Tabs=styled(Link)`
    font-size:20px;
    margin-right:30px;
    padding:7px;
    margin-top:5px;
    margin-bottom:5px;
    border-radius:5px;
    cursor:pointer;
    text-decoration:none;
    color:white;
    &:hover{
        color:black;
        background-color:white;
    }
`

const Navbar = () => {
  return (
    <Header>
        <Toolbar>
            <Tabs to="/">4shutoshbhardwaj</Tabs>
            <Tabs to="/all">All Users</Tabs>
            <Tabs to="/add">Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar