import User from "../schema/user-schema.js";

export const addUser=async(req,res)=>{
    const data=req.body;
    const newUser=new User(data);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}

export const getUsers=async(req,res)=>{
    try {
        const data=await User.find({});
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}

export const editUser=async(req,res)=>{
    console.log(req.params.id);
    try {
        const data=await User.find({_id:req.params.id});
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}

export const updateUser=async(req,res)=>{
    const validData=new User(req.body);
    console.log(req.body,validData);
    try {
        await User.updateOne({_id:req.params.id},validData);
        res.status(201).json(validData);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const deletedItem=await User.deleteOne({_id:req.params.id});
        res.status(201).json(deletedItem);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}