import mongoose from 'mongoose';

const Connection=async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@crud-app.nyjl8gj.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log('database connected');
    } catch (err) {
        console.log(`error while connecting to the database ${err}`);
    }
}

export default Connection;