import {Schema,model} from 'mongoose'
// create user schema(uname,password,age)

let userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is a required field"],
        minLength:[4,"Minimum length is 4 characters"],
        maxLength:[10,"the maximum length is 10 character"]
    },
    password:{
        type:String,
        required:[true,"A password must be kept"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should above 18"],
        max:[25,"Age must be below 25"]
    }
},{
    strict:"throw",
    timestamps:true
});

//  create user model using that schema

export const UserModel=model("user",userSchema)