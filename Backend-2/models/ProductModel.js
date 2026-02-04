import { Schema,model} from 'mongoose'
//creating a new product schema

let productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"id  is a required field"]
    },
    productName:{
        type:String,
        required:[true,"A name must be given"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10,"min price is 10"]
    }
},{
    strict:"throw",
    timestamps:true
});

export const ProductModel = model("product", productSchema);