const jwt=require('jsonwebtoken')
const UserModal = require('../modals/User')


const CheckUserAuth=async(req,res,next)=>{
    //console.log("Hello User")
    const{token}=req.cookies
    //console.log(token)
    if(!token){
        req.flash('error','Unauthorized user, Please Login!')
        return res.redirect('/')
    }
    else{
        const verify_token= jwt.verify(token,'rohitrishishwar9755')
        const data=await UserModal.findOne({_id:verify_token.id})
        //console.log(data)
        req.user=data
        //console.log(verify_token)
        next()
    }
}
module.exports=CheckUserAuth