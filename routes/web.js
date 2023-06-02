const express = require('express')
const FrontController = require('../Controllers/FrontController')
const CourseController = require('../Controllers/CourseController')
const route= express.Router()
const CheckUserAuth=require('../Middleware/auth')

//router
//FrontController
route.get('/',FrontController.login)
route.get('/registration',FrontController.registration)
route.get('/dashboard',CheckUserAuth,FrontController.dashboard)
route.get('/about',CheckUserAuth,FrontController.about)
route.get('/contact',CheckUserAuth,FrontController.contact)
route.post('/verifylogin',FrontController.verifylogin)
route.get('/logout',FrontController.logout)

//route
route.post('/userinsert',FrontController.userinsert)

//CourseController
route.post('/courseinsert',CheckUserAuth,CourseController.courseinsert)
route.get('/coursedisplay',CheckUserAuth,CourseController.display)
route.get('/view/:id',CheckUserAuth,CourseController.view)
route.get('/edit/:id',CheckUserAuth,CourseController.edit)
route.post('/courseupdate/:id',CheckUserAuth,CourseController.update)
route.get('/delete/:id',CheckUserAuth,CourseController.delete)




module.exports= route