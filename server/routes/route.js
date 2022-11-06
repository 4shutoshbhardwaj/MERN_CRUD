import express from 'express';
import { addUser,getUsers,editUser,updateUser,deleteUser } from '../controller/user-controller.js';

const router=express.Router();

router.post('/add',addUser);

router.get('/all',getUsers);

router.get('/edit/:id',editUser);

router.post('/update/:id',updateUser);

router.delete('/delete/:id',deleteUser);

export default router;