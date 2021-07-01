const projectsRouter = require("express").Router()

projectsRouter.get('/', (req, res) => {
    res.send('Selamat Datang di Keroyokin Projects')
  })  

module.exports = projectsRouter