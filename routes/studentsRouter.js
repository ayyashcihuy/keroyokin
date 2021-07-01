const studentsRouter = require("express").Router()
const Controller = require("../controllers/studentsController")

studentsRouter.get('/', (req, res) => {
    res.send('Selamat Datang di Keroyokin students')
  })

studentsRouter.get('/signUp', Controller.formSignUp) 
studentsRouter.post('/signUp', Controller.signUp)
studentsRouter.get('/login', Controller.login) 

module.exports = studentsRouter

//crud = Create, Read, Update, Delete