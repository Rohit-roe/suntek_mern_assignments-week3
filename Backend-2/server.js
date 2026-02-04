import exp from 'express';
import { userApp } from './APIs/userapi.js';
import { productApp } from './APIs/productAPI.js';  
import {connect} from 'mongoose'
const app=exp();
const port=4000;
app.use(exp.json())

// connect a db server
async function connectDB(){
    try{
   await connect('mongodb://localhost:27017/anuragdb')
   console.log("DB is connected")
   app.listen(port,()=>console.log("Server is running on port "+port));
    }
    catch(err){
        console.log("Error in connecting to DB",err)
    }
}

connectDB()
app.use('/api/users',userApp);
app.use('/api/products',productApp)

// error handling middleware
