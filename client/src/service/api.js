import axios from 'axios';

const url='http://localhost:8080';

export const addUser=async(data)=>{
    try {
        return await axios.post(`${url}/add`,data);
    } catch (err) {
        console.log('error while calling addUser api' ,err);
    }
}

export const getUsers=async()=>{
    try {
        return await axios.get(`${url}/all`);
    } catch (err) {
        console.log('error while calling getUser api' ,err);
    }
}

export const editData=async(id)=>{
    try {
        return await axios.get(`${url}/edit/${id}`);
    } catch (err) {
        console.log('error while calling editUser api' ,err);
    }
}

export const updateData=async(data,id)=>{
    try {
        return await axios.post(`${url}/update/${id}`,data);
    } catch (err) {
        console.log('error while calling editUser api' ,err);
    }
}

export const deleteUser=async(id)=>{
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch (err) {
        console.log('error while calling editUser api' ,err);
    }
}