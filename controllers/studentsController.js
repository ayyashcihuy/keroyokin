const { Student, Project } = require('../models/index');
const { hashingPassword, comparePassword } = require('../helper/bcrypt');
const transporter = require('../helper/emailSetUp');


class StudentController {

    static formSignUp(req, res) {
        res.render('signup.ejs')
    }

    static signUp(req, res) {
        let newStudent = {
            name: req.body.name,
            email: req.body.email,
            password: hashingPassword(req.body.password)     
        }
        console.log(newStudent);
        Student
            .create(newStudent)
            .then(newStudent => {
                req.session.isLogin = true
                res.redirect('/projects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static login(req, res) {
        // console.log(req.session.id);
        res.render('login.ejs')
    }

    static loginPost(req, res) {
        let input = {
            email: req.body.email,
            password: req.body.password
        }
        // console.log(input);
        Student
        .findOne({
            where: {
                email: input.email
            }
        })
        .then(data => {
            if(comparePassword(input.password, data.password)) {
                req.session.isLogin = true
                const mailData = {
                    from: "keroyokan@gmail.com",
                    to: input.email,
                    subject: "Ahlaaaan~",
                    text: "Mantap Sohabat",
                    html: '<b> Assalamualaikum </b>'
                }
                transporter.sendMail(mailData, (err, info) => {
                    if(err) {
                        console.log(err);
                        // res.send(err)
                    }
                res.redirect("/projects")
                })
            } else {
                res.redirect("/students/login")
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentController