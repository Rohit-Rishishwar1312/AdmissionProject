const express = require('express')
const FrontController = require('../Controllers/FrontController')
const route= express.Router()

//router
//FrontController
route.get('/',FrontController.login)
route.get('/registration',FrontController.registration)
route.get('/dashboard',FrontController.dashboard)
route.get('/home',FrontController.home)


module.exports= route