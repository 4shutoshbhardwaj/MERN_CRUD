import { FormControl, TextField, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addUser } from '../service/api';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { editData } from '../service/api';
import { updateData } from '../service/api';

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


const EditUser = () => {

    const navigate=useNavigate();

    const [data,setData]=useState(initData);

    const {id}=useParams();

    useEffect(()=>{
        EditUser();
    },[])

    const EditUser=async()=>{
        const userData=await editData(id);
        setData(userData.data[0]);
        console.log(userData.data[0]);
    }

    const onValueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    
    const addUserDetails=async(e)=>{
        await updateData(data,id);
        navigate('/all');
    }

  return (
    <Container>
        <Typography variant="h4">Edit User</Typography>
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
            <AddButton variant="contained" onClick={()=>addUserDetails()}>Edit User</AddButton>
        </InputContainer>
    </Container>
  )
}

export default EditUser