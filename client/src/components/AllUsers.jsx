import React from 'react'
import { TableHead,Table,TableBody,TableCell,TableRow,styled,Button } from '@mui/material';
import { getUsers } from '../service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading.gif';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../service/api';

const StyledTable=styled(Table)`
  width:90%;
  margin: 50px auto;
`

const StyledTableRowHead=styled(TableRow)`
  background-color:black;
  color:white;
  &>*{
    text-align:center;
    color:white;
    font-size:20px;
  }
`

const StyledTableCellHead=styled(TableCell)`
  text-align:center;
  color:white;
  font-size:20px;
`

const StyledTableRowBody=styled(TableRow)`
  &>*{
    font-size:18px;
    text-align:center;
  }
`

const EditButton=styled(Button)`
  background-color:lightblue;
  cursor:pointer;
  color:blue;
  &:hover{
    background-color:blue;
    color:white;
  }
  `
  
  const DeleteButton=styled(Button)`
  background-color:lightgreen;
  cursor:pointer;
  color:green;
  &:hover{
    color:white;
    background-color:green;
  }
`

const AllUsers = () => {

  const navigate=useNavigate();

  const [num,setNum]=useState(Math.random());

  const [data,setData]=useState([]);

  useEffect(()=>{
    getAllUsers();
  },[num])

  const getAllUsers=async()=>{
    const users=await getUsers()
    setData(users.data);
    console.log(data);
  }

  const editButtonClicked=(id)=>{
    navigate(`/edit/${id}`)
  }

  const deleteThisUser=async(id)=>{
    await deleteUser(id);
    setNum(Math.random());
  }

  return (
    <StyledTable>
      <TableHead>
        <StyledTableRowHead>
          <StyledTableCellHead>Id</StyledTableCellHead>
          <StyledTableCellHead>Name</StyledTableCellHead>
          <StyledTableCellHead>UserName</StyledTableCellHead>
          <StyledTableCellHead>Email</StyledTableCellHead>
          <StyledTableCellHead>Phone</StyledTableCellHead>
          <StyledTableCellHead>Edit</StyledTableCellHead>
          <StyledTableCellHead>Delete</StyledTableCellHead>
        </StyledTableRowHead>
      </TableHead>
      <TableBody>
        {
          data.length==0?<TableRow><TableCell>Loading...</TableCell></TableRow>:(
            data.map((el)=>(
              <StyledTableRowBody key={el._id} style={{backgroundColor:el._id%2==0?"white":"white"}}>
                <TableCell>{el._id}</TableCell>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.username}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>{el.phone}</TableCell>
                <TableCell><EditButton onClick={()=>editButtonClicked(el._id)}>Edit</EditButton></TableCell>
                <TableCell><DeleteButton onClick={()=>deleteThisUser(el._id)}>Delete</DeleteButton></TableCell>
              </StyledTableRowBody>
            ))
          )
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers