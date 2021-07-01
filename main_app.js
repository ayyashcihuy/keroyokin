const express = require('express')
const mainRouter = require('./routes')
const projectsRouter = require('./routes/projectsRouter')
const studentsRouter = require('./routes/studentsRouter')
const app = express()
const port = process.env.PORT || 3000
const session = require("express-session")
const nodemailer = require('nodemailer');

app.set("view engine", "ejs")
app.use(session({
  secret: "initialD",
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({extended:true}))
app.use('/', mainRouter)
app.use('/students', studentsRouter)

app.use((req, res, next) => {
  if(req.session.isLogin) {
    next()
  } else {
    res.redirect("/students/login")
  }
})

app.use('/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})