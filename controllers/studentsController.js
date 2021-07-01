const { Student, Project } = require('../models/index');
const addUserToStudentName = require('../helper/addusertostudentname');

class StudentController {

    static formSignUp(req, res) {
        res.render('signUp.ejs')
    }

    static signUp(req, res) {
        let newStudent = {
            name: req.body.name,
            email: req.body.name,
            password: req.body.password     
        }

        Student
            .create(newStudent)
            .then(newStudent => {
                res.redirect('/', {newStudent, addUserToStudentName})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static login(req, res) {
        res.render('login.ejs')
    }

    // static formEditStudentData(req, res) {
    //     const id = +req.params.id

    //     Student
    //         .findByPk(id)
    //         .then(list => {
    //             res.render('editStudent.ejs', { list })
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
    // }

    // static editStudentData(req, res) {
    //     const id = +req.params.id
    //     let newCastData = {
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         birth_year: +req.body.birth_year,
    //         phone_number: +req.body.phone_number,
    //         gender: req.body.gender
    //     }

    //     Student
    //         .update(newCastData, {
    //             where: {
    //                 id: id
    //             }
    //         })
    //         .then(data => {
    //             res.redirect('/casts')
    //         })
    //         .catch(err => res.send(err))
    // }
}

module.exports = StudentController