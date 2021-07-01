const mainRouter = require("express").Router()

mainRouter.get('/', (req, res) => {
  res.send('Selamat Datang di Keroyokin Home')
})

module.exports = mainRouter