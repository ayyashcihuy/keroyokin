const studentsRouter = require("express").Router()

studentsRouter.get('/', (req, res) => {
    res.send('Selamat Datang di Keroyokin students')
  })  

module.exports = studentsRouter