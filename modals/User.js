const mongoose=require('mongoose')

//define schema
const Userschema=new mongoose.Schema({
    name: {
       type:String,
       required:true 
    },
    email: {
        type:String,
        required:true 
     },
     password: {
        type:String,
        required:true 
     }
},{timestamps:true})
//create collection
const UserModal=mongoose.model('user',Userschema)
module.exports=UserModal
