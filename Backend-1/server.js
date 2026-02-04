//Create HTTP Server
// import express module
import exp from 'express';
import { userApp } from './APIs/userAPI.js';
import { productApp } from './APIs/productAPI.js';

// use the userAPI for all routes starting with /api

// create Server
const app = exp();
app.use(exp.json())  // to parse json data

app.use('/user-api', userApp);
app.use('/product-api', productApp);

// Assign port number
const port = 3000
app.listen(port, () => console.log(`HTTP server listening on port ${port}`))


//  create an API(request handler)
// HTTp request types: (CRUD operations)
// GET, POST, PUT, DELETE
// get req handling route(Read users)

// body parsing middleware

// create a custom middleware
// function middleware1(req,res,next){
//     console.log("middleware-1 executed")
//     // send resposnse
//     //res.json({message:"Response from middleware"})
//     //forward request to next middleware
//     next()
// }

// function middleware2(req,res,next){
//     console.log("middleware-2 executed")
//     // send resposnse
//     //res.json({message:"Response from middleware"})
//     //forward request to next middleware
//     next()
// }

// // to execute for every req
// app.use(middleware1)

//Create user API(req handler)
// test local in-memory data

