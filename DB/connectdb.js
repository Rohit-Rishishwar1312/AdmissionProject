const mongoose=require('mongoose')
const url ="mongodb://0.0.0.0:27017/admissionportal"
const live_Url='mongodb+srv://rishishwarrohit:Rohit12345@cluster0.sw4wo3h.mongodb.net/admissionportal?retryWrites=true&w=majority'


const connectdb=()=>{
    return mongoose.connect(live_Url)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectdb
