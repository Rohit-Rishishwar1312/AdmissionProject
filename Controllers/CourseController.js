const CourseModal=require('../modals/Course')

class CourseController{

  static courseinsert=async(req,res)=>{
    try{
      const{name,image,_id}=req.user
      //console.log(req.body)
      const data=new CourseModal({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        tenth:req.body.tenth,
        twelth:req.body.twelth,
        course:req.body.course,
        userid: _id
      })
      await data.save()
      res.redirect('/coursedisplay')
    }catch(error){
     console.log(error)
    }
}
static display=async(req,res)=>{
  try{
    const{name,image,_id}=req.user
    const data=await CourseModal.find({userid:_id})
    //console.log(data)
    res.render('course/display', {d:data,n:name,i:image} )
  }catch(error){
    console.log(error)
  }
}
static view=async(req,res)=>{
  try{
    const{name,image,_id}=req.user
    //console.log(req.params.id)
    const data=await CourseModal.findById(req.params.id)
    //console.log(data)
    res.render('course/view',{v:data,n:name,i:image})
  }catch(error){
    console.log(error)
  }
}
static edit=async(req,res)=>{
  try{
    const{name,image,_id}=req.user
    //console.log(req.params.id)
    const data=await CourseModal.findById(req.params.id)
    //console.log(data)
    res.render('course/edit',{e:data,n:name,i:image})
  }catch(error){
    console.log(error)
  }
}
static update=async(req,res)=>{
  try{
    const{name,image,_id}=req.user
    //console.log(req.params.id)
    //console.log(req.body)
    const data=await CourseModal.findByIdAndUpdate(req.params.id,{
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      tenth:req.body.tenth,
      twelth:req.body.twelth,
      course:req.body.course,
    })
    res.redirect('/coursedisplay')//redirect route path ata hai
  }catch(error){
    console.log(error)
  }
}

static delete=async(req,res)=>{
  try{
    //console.log(req.params.id)
    const data=await CourseModal.findByIdAndDelete(req.params.id)
    res.redirect('/coursedisplay')
  }catch(error){
    console.log(error)
  }
}

  
}

module.exports=CourseController