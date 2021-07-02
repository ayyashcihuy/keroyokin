const studentsRouter = require("express").Router()
const Controller = require("../controllers/studentsController")

studentsRouter.get('/signup', Controller.formSignUp) 
studentsRouter.post('/signup', Controller.signUp)
studentsRouter.get('/login', Controller.login) 
studentsRouter.post('/login', Controller.loginPost) 

module.exports = studentsRouter

//crud = Create, Read, Update, Delete