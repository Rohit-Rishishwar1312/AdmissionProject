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
      res.render("registration")
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
}

module.exports=FrontController