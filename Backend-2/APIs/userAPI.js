import exp from 'express';
import {UserModel} from '../models/UserModel.js'
export const userApp=exp.Router();

userApp.get('/user',(req,res)=>{
    res.json({message:"User is working"})
})

// Create
userApp.post('/user',async (req,res)=>{
    let newUser=req.body
    // create new user document
    let newUserDocument=new UserModel(newUser)
    // save in db
    let usersList=await newUserDocument.save()
    res.status(200).json({message:"user:",usersList})
})
// Read
userApp.get('/user',async(req,res)=>{
    // read users from DB
    let usersList=await UserModel.find()
    res.json({message:"users:",payload:usersList});
})
// Read user by ObjectId
userApp.get('/user/:id',async (req,res)=>{
    // get the objectId
    let objID=req.params.id;
    // find user in db
    let userObj=await UserModel.findById(objID)
    // send response
    res.status(200).json({message:"user:",payload:userObj})
})

// Update
userApp.put('/user/:id',async (req,res)=>{
    // get objectID from url
    let objectID=req.params.id
    // get modified user from req
    let modifiedUser=req.body
    // make the update
    let latestUser=await UserModel.findByIdAndUpdate(objectID,{$set:{...modifiedUser}},{new:true,runValidators:true})
    // send resource
    res.status(200).json({message:"modified user:",payload:latestUser})
})
// Delete
userApp.delete('/user/:id',async (req,res)=>{
    // get objectID from url
    let objectID=req.params.id
    let deleteUser=await UserModel.findByIdAndDelete(objectID)
    res.status(200).json({message:"deleted user:",payload:deleteUser})
})