import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';

const app=express();

dotenv.config();

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

const port=8080;

Connection(username,password);

app.listen(port,()=>console.log(`server started at ${port}`));