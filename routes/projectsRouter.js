const Controller = require("../controllers/controller")

const projectsRouter = require("express").Router()

projectsRouter.get('/', Controller.homeProject)  
projectsRouter.get('/add', Controller.addProject)  
projectsRouter.post('/add', Controller.addProjectPost)  
projectsRouter.post('/:id/answer', Controller.addAnswerPost)  
projectsRouter.get('/:id/answer', Controller.addAnswer)  
projectsRouter.get('/solved', Controller.homeProjectSolved)  
projectsRouter.get('/logout', Controller.logout)  

module.exports = projectsRouter