import { FormControl, TextField, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addUser } from '../service/api';

const Container=styled(FormGroup)`
    width:50%;
    margin:auto;
    margin-top:50px;
    &>*{
        margin-top:1em;
    }
`

const InputContainer=styled(FormControl)`
    margin-top:30px;
`

const AddButton=styled(Button)`
    width:20%;
    margin:auto;
`

const initData={
    name:"",
    username:"",
    email:"",
    phone:""
}

const AddUser = () => {

    const [data,setData]=useState(initData);

    const onValueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }

    const addUserDetails=async()=>{
        await addUser(data);
    }

  return (
    <Container>
        <Typography variant="h4">Add User</Typography>
        <InputContainer>
            <InputLabel>Name</InputLabel>
            <Input value={data.name} name="name" onChange={(e)=>{onValueChange(e)}}/>
        </InputContainer>
        <InputContainer>
            <InputLabel>Username</InputLabel>
            <Input value={data.username} name="username" onChange={(e)=>{onValueChange(e)}}/>
        </InputContainer>
        <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input value={data.email} name="email" onChange={(e)=>{onValueChange(e)}}/>
        </InputContainer>
        <InputContainer>
            <InputLabel>Phone</InputLabel>
            <Input value={data.phone} name="phone" onChange={(e)=>{onValueChange(e)}}/>
        </InputContainer>
        <InputContainer>
            <AddButton variant="contained" onClick={()=>addUserDetails()}>Add User</AddButton>
        </InputContainer>
    </Container>
  )
}

export default AddUser