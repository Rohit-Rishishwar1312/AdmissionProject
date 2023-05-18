const UserModal=require('../modals/User')
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dh2z9vnjv",
  api_key: "151831486446118",
  api_secret: "SjUwX5N-Lo0HQaQDBaGsBwkJ4t0",
  secure: false,
});

class FrontController{
   static login=async(req,res)=>{
    try{
      res.render("login")
    }catch(error){
        console.log(error)
    }
   }
   static registration=async(req,res)=>{
    try{
      res.render("registration",{message:req.flash('error')})
    }catch(error){
        console.log(error)
    }
   }
   static dashboard=async(req,res)=>{
    try{
      res.render("dashboard")
    }catch(error){
        console.log(error)
    }
   }
   static home=async(req,res)=>{
    try{
      res.render("home")
    }catch(error){
        console.log(error)
    }
   }
   static userinsert=async(req,res)=>{
    console.log(req.files.image)
  //   const {name,email,password,confirm_password}=req.body
  //   const user=await UserModal.findOne({email:email})
  //   //console.log(user)
  //   if(user){
  //     req.flash('error','Email already exist')
  //     res.redirect('/registration')
  //   }
  //   else{
  //     if(name && email && password && confirm_password){
  //       if(password==confirm_password){

  //         try{
  //            const hashpassword=await bcrypt.hash(password,10)
  //            //console.log(req.body)
  //            const result=new UserModal({
  //             name: name,
  //             email: email,
  //             password: hashpassword
  //            })
  //            await result.save()
  //            res.redirect('/')
        
  //           }catch(error){
  //            console.log(error)
  //           }
  //       }
  //       else{
  //         req.flash('error','Password and confirm password does not match')
  //         res.redirect('/registration')
  //       }
  //     }
  //     else{
  //       req.flash('error','All Field are required')
  //       res.redirect('/registration')
  //     }
  //   }
     
    }
}

module.exports=FrontController