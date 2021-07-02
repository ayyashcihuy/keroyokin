const { Project } = require("../models/index")
const { Student } = require("../models/index")
const { StudentProject } = require("../models/index")

class Controller {
    static homeProject(req, res) {
        Project
        .findAll()
        .then(data => {
            res.render("homeProject", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addProject(req, res) {
        res.render("addProject")
    }

    static addProjectPost(req,res) {
        let input = {
            StudentId: 1,
            task_name: req.body.task_name,
            subject: req.body.subject,
            detail_task: req.body.detail_task,            
        }
        Project
        .create(input)
        .then(() => {
            res.redirect("/projects")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addAnswer(req,res) {
        let id = Number(req.params.id)
        let data
        Project
        .findByPk(id)
        .then(result => {
            data = result
            return Student
            .findByPk(data.StudentId)
        })
        .then(result => {
            // console.log(data, "<<<");
            // console.log(result, ">>>");
            res.render("addAnswer", {data, result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addAnswerPost(req,res) {
        let id = Number(req.params.id)
        let input = {
            StudentId: +req.query.StudentsId,
            answer: req.body.answer,
            ProjectId: id
        }
        StudentProject
        .create(input)
        .then(() => {
            res.redirect("/projects")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static homeProjectSolved(req,res) {
        Project
        .findAll({
            where: {
                status_report: "solved"
            },
            include: [{
                model: Student
            }]
        })
        .then(data => {
            // res.send(data)
            // console.log(data);
            res.render("projectSolved", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req,res) {
        req.session.destroy()
        res.redirect("/students/login")
    }
}

module.exports = Controller