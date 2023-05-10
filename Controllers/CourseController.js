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
static view=async(req,res)=>{
  try{
    //console.log(req.params.id)
    const data=await CourseModal.findById(req.params.id)
    //console.log(data)
    res.render('course/view',{v:data})
  }catch(error){
    console.log(error)
  }
}
static edit=async(req,res)=>{
  try{
    //console.log(req.params.id)
    const data=await CourseModal.findById(req.params.id)
    //console.log(data)
    res.render('course/edit',{e:data})
  }catch(error){
    console.log(error)
  }
}
static update=async(req,res)=>{
  try{
    console.log(req.params.id)
    console.log(req.body)
    //const data=await CourseModal.findById(req.params.id)
    //console.log(data)
    //res.render('course/edit',{e:data})
  }catch(error){
    console.log(error)
  }
}

  
}

module.exports=CourseController