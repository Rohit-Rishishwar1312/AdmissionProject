const ContactModal = require('../../modals/Contact')
const CourseModal=require('../../modals/Course')
const nodemailer=require('nodemailer')
class AdminController{
  static display=async(req,res)=>{
    try{
      const { name, image, email, _id } = req.user
      const data=await CourseModal.find()
      res.render('admin/display',{d:data,n: name, i: image, e: email})
    } catch (error) {
    console.log(error)
    }
  }
  static viewcontact=async(req,res)=>{
    try{
      const { name, image, email, _id } = req.user
      const data=await ContactModal.find()
      res.render('admin/viewcontact',{d:data,n: name, i: image, e: email})
    } catch (error) {
    console.log(error)
    }
  }
  static courseview=async(req,res)=>{
    try{
      const { name, image, email,role, _id } = req.user
      const view=await CourseModal.findById(req.params.id)
      res.render('admin/view',{v:view,n: name, i: image, e: email,r:role})
    } catch (error) {
    console.log(error)
    }
  }
  static coursedelete=async(req,res)=>{
    try{
      //console.log(req.params.id)
      const data=await CourseModal.findByIdAndDelete(req.params.id)
      res.redirect('/admin/display')
    }catch(error){
      console.log(error)
    }
  }
  static updatestatus=async(req,res)=>{
    try{
      const{name,image,_id}=req.user
      const{course,email,comment,status}=req.body
      const data=await CourseModal.findByIdAndUpdate(req.params.id,{
        comment:req.body.comment,
        status:req.body.status
      })
      //this.SendEmail(comment,status,course,name,email)
      req.flash('success','Status updated successfully')
      res.redirect('/admin/display')
    }catch(error){
      console.log(error)
    }
  }
//   static SendEmail = async (comment,status,course,name,email) => {
        
//     console.log(comment,status,course,name,email)
//     // 1RHfz85p4XfEue4Juv
//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'rishishwarrohit@gmail.com',
//             pass: 'apwecivzwbqpgrof'
//         },
//       });
    
//       // send mail with defined transport object
//       let info = await transporter.sendMail({
//         from: '"rishishwarrohit@gmail.com" <rishishwarrohit@gmail.com>', // sender address
//         to: email, // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: `${name} your ${course} course  ${status} successfully, <br><b>${comment}</b>`, // html body
//       });
    

// }
}
module.exports= AdminController