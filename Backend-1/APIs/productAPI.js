import exp from 'express';

// create a mini-express app (seperate Route)
export const productApp = exp.Router();

// product API
let products=[];

// creating a post
productApp.get('/products',(req,res)=>{
    // send the product data as a response
    res.status(200).json({message:"all products",payload:products})
})
// get by id
productApp.get('/products/:id',(req,res)=>{
    // read id from url parameter
    console.log(req.params.id)
    let productId=Number(req.params.id)

    // read user by this id
    let product=products.find(productObj=>productObj.id===productId);
    if(!product) return res.status(404).json({message:"product not found"})
    res.json({message:"product",payload:product})
    })
// get by the brand of the product
productApp.get('/products/:brand',(req,res)=>{
    // read id from url parameter
    console.log(req.params.brand)
    let productId=req.params.id

    // read user by this id
    let product=products.find(productObj=>productObj.brand===req.params.brand);
    if(!product) return res.status(404).json({message:"product not found"})
    res.json({message:"product",payload:product})
    })
// post
productApp.post('/products',(req,res)=>{
    let newProduct=req.body;
    console.log(newProduct);
    products.push(newProduct);
    res.status(200).json({message:"product created successfully"})
})

// put
productApp.put('/products/:id', (req,res)=>{
    // get modified user from req
    let modProduct=req.body;
    console.log(modProduct);
    // find if user exists in the array
    let productFind = products.findIndex((product)=>product.id===modProduct.id);
    // if user not found send result as "user not found"
    if(productFind===-1){
       return res.status(404).json({message:"product not found"})
    }
    // if user is found then modify the user
        products.splice(productFind,1,modProduct)
        res.status(200).json({message:"The product has been modified"})
})

// delete
productApp.delete('/products/:id', (req,res)=>{
    let deleteId=Number(req.params.id)
    let product=products.findIndex(productObj=>productObj.id===deleteId)
    if(product===-1){return res.status(404).json({message:"product not found"})}

    let deleteProduct=products.splice(product,1);
    res.status(200).json({message:"product deleted",payload:deleteProduct})
})