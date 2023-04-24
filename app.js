const express = require('express')
const app = express()
const port = 3000
const web= require('./routes/web')
const connectdb= require('./DB/connectdb')


//connectdb
connectdb()
//for static files
app.use(express.static('public'))

//ejs set for html
app.set('view engine', 'ejs')




//router load
app.use('/',web)

//server start
app.listen(port, () => {
  console.log(`Server start on port localhost: ${port}`)
  //template string format to write 
})
