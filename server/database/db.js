import mongoose from 'mongoose';

const Connection=async(URL)=>{
    const url=URL;
    try {
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log('database connected');
    } catch (err) {
        console.log(`error while connecting to the database ${err}`);
    }
}

export default Connection;