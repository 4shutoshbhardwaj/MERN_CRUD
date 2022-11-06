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

const port=process.env.PORT||8080;

const URL=process.env.DATABASE;

Connection(URL);

app.use('/',router);

app.listen(port,()=>console.log(`server started at ${port}`));