const express = require('express')
const mainRouter = require('./routes')
const projectsRouter = require('./routes/projectsRouter')
const studentsRouter = require('./routes/studentsRouter')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use('/', mainRouter)
app.use('/students', studentsRouter)
app.use('/projects', projectsRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})