import axios from 'axios';

const url='http://localhost:8080';

export const addUser=async(data)=>{
    try {
        return await axios.post(`${url}/add`,data);
    } catch (err) {
        console.log('error while calling addUser api' ,err);
    }
}