const UserModal=require('../modals/User')
const CourseModal=require('../modals/Course')
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const jwt= require('jsonwebtoken')
cloudinary.config({
  cloud_name: "dh2z9vnjv",
  api_key: "151831486446118",
  api_secret: "SjUwX5N-Lo0HQaQDBaGsBwkJ4t0",
  secure: false,
});

class FrontController{
   static login=async(req,res)=>{
    try{
      res.render("login",{message:req.flash('error')})
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
      const{name,image,email,_id}=req.user
      const btech= await CourseModal.findOne({userid:_id,course:'Btech'})
      const bca= await CourseModal.findOne({userid:_id,course:'Bca'})
      const mca= await CourseModal.findOne({userid:_id,course:'Mca'})
      res.render("dashboard",{n:name,i:image,e:email,b:btech,bca:bca,mca:mca})
    }catch(error){
        console.log(error)
    }
   }
   static about=async(req,res)=>{
    try{
      const{name,image,_id}=req.user
      res.render("about",{n:name,i:image})
    }catch(error){
        console.log(error)
    }
   }
   static contact=async(req,res)=>{
    try{
      const{name,image,_id}=req.user
      res.render("contact",{n:name,i:image})
    }catch(error){
        console.log(error)
    }
   }
   static userinsert=async(req,res)=>{
    //console.log(req.files.image)
    const imagefile=req.files.image
    const imageupload=await cloudinary.uploader.upload(imagefile.tempFilePath,{
      folder: 'profileimage'
    })
    //console.log(imageupload)
    const {name,email,password,confirm_password}=req.body
    const user=await UserModal.findOne({email:email})
    //console.log(user)
    if(user){
      req.flash('error','Email already exist')
      res.redirect('/registration')
    }
    else{
      if(name && email && password && confirm_password){
        if(password==confirm_password){

          try{
             const hashpassword=await bcrypt.hash(password,10)
             //console.log(req.body)
             const result=new UserModal({
              name: name,
              email: email,
              password: hashpassword,
              image:{
                public_id: imageupload.public_id,
                url: imageupload.secure_url
              }
             })
             await result.save()
             res.redirect('/')
        
            }catch(error){
             console.log(error)
            }
        }
        else{
          req.flash('error','Password and confirm password does not match')
          res.redirect('/registration')
        }
      }
      else{
        req.flash('error','All Field are required')
        res.redirect('/registration')
      }
    }
     
    }
    static verifylogin=async(req,res)=>{
      try{
        //console.log(req.body)
        const{email,password}=req.body
        if(email && password){
          const user=await UserModal.findOne({email:email})
          if(user != null){
             const ismatched=await bcrypt.compare(password,user.password)
             if(ismatched){
              //generate token
              const token= jwt.sign({id:user._id},'rohitrishishwar9755')
              //console.log(token)
              res.cookie('token',token)
              res.redirect('/dashboard')
             }
             else{
              req.flash('error','Email and Password is not valid')
              res.redirect('/')
             }
          }
          else{
            req.flash('error','You are not a registered user')
            res.redirect('/')
          }
        }
        else{
          req.flash('error','All Field are required')
          res.redirect('/')
        }
      }catch(error){
          console.log(error)
      }
     }
     static logout=async(req,res)=>{
      try{
        res.clearCookie('token')
        res.redirect('/')
      }catch(error){
          console.log(error)
      }
     }
}

module.exports=FrontController