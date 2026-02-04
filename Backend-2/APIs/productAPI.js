import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()
let products=[]
productApp.get('/products',async (req,res)=>{
    let productList=await ProductModel.find()
    res.json({message:"products",payload:productList})
})

// adding the values
productApp.post('/products',async (req,res)=>{
    let newProduct=req.body
    // creating a new document
    let newProductDoc=new ProductModel(newProduct)
    // adding it to the collection
    let productList=await newProductDoc.save()

    res.json({message:"new product:",productList})
})

// reading by id
productApp.get('/products/:id',async (req,res)=>{
    let objId=req.params.id
    let productObj=await ProductModel.findById(objId);
    // returning the object
    res.json({message:"product:",payload:productObj})
})

// updating by objectId
productApp.put('/products/:id',async (req,res)=>{
    let objId=req.params.id
    let modifiedProduct=req.body
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true,runValidators:true})
    res.json({message:"updated product:",payload:latestProduct})
})