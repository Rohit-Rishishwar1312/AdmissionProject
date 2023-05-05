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




module.exports= route