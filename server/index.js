import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

const port=8080;

Connection(username,password);

app.use('/',router);

app.listen(port,()=>console.log(`server started at ${port}`));