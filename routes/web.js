const express = require('express')
const FrontController = require('../Controllers/FrontController')
const CourseController = require('../Controllers/CourseController')
const route= express.Router()

//router
//FrontController
route.get('/',FrontController.login)
route.get('/registration',FrontController.registration)
route.get('/dashboard',FrontController.dashboard)
route.get('/home',FrontController.home)


//route
route.post('/userinsert',FrontController.userinsert)

//CourseController
route.post('/courseinsert',CourseController.courseinsert)
route.get('/coursedisplay',CourseController.display)
route.get('/view/:id',CourseController.view)
route.get('/edit/:id',CourseController.edit)
route.post('/courseupdate/:id',CourseController.update)
route.get('/delete/:id',CourseController.delete)




module.exports= route