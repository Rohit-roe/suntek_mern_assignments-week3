import exp from 'express';

// create a mini-express app (seperate Route)
export const userApp = exp.Router();

let users = [];
// get req handling route(Read users)
userApp.get('/users', (req,res)=>{
    // send user data as response
    res.status(200).json({message:"all users",payload:users}) // status code is sent using status()
})
//  post req handling route(Create users)
userApp.post('/users', (req,res)=>{
    // get user resource from the req body
    let newUser=req.body;
    console.log(newUser);
    // insert new user into users array
    users.push(newUser);
    res.status(201).json({message:"user created successfully"})
})
// put req handling route(Update users)
userApp.put('/users', (req,res)=>{
    // get modified user from req
    let modUser=req.body;
    console.log(modUser);
    // find if user exists in the array
    let userFind=users.findIndex((user)=>user.id===modUser.id);
    // if user not found send result as "user not found"
    if(userFind===-1){
       return res.status(404).json({message:"User not found"})
    }
    // if user is found then modify the user
        users.splice(userFind,1,modUser)
        res.status(200).json({message:"The user has been modified"})
})

// read user by id
userApp.get('/users/:id',(req,res)=>{
    // read id from url parameter
    console.log(req.params.id)
    let userId=Number(req.params.id)

    // read user by this id
    let user=users.find(userObj=>userObj.id===userId);
    if(!user) return res.status(404).json({message:"User not found"})
    res.json({message:"user",payload:user})
    })
// delete req handling route(Delete users)
userApp.delete('/users/:id', (req,res)=>{
    let deleteId=Number(req.params.id)
    let user=users.findIndex(userObj=>userObj.id===deleteId)
    if(user===-1){return res.status(404).json({message:"User not found"})}

    let deleteUser=users.splice(user,1);
    res.status(200).json({message:"user deleted",payload:deleteUser})
})