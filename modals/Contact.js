const mongoose=require('mongoose')

//define schema
const Contactschema=new mongoose.Schema({
    name: {
       type:String,
       required:true 
    },
    email: {
        type:String,
        required:true 
     },
     subject: {
        type:String,
        required:true 
     },
     message: {
        type:String,
        required:true 
     },
     userid: {
      type: String,
      required:true
     }
     
},{timestamps:true})
//create collection
const ContactModal=mongoose.model('contact',Contactschema)
module.exports=ContactModal
