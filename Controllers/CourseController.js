const CourseModal=require('../modals/Course')

class CourseController{

  static courseinsert=async(req,res)=>{
    try{
      //console.log(req.body)
      const data=new CourseModal({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        tenth:req.body.tenth,
        twelth:req.body.twelth,
        course:req.body.course,
      })
      await data.save()
      res.redirect('/coursedisplay')
    }catch(error){
     console.log(error)
    }
}
static display=async(req,res)=>{
  try{
    const data=await CourseModal.find()
    //console.log(data)
    res.render('course/display', {d:data} )
  }catch(error){
    console.log(error)
  }
}
  
}

module.exports=CourseController