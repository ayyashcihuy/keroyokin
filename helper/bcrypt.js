let bcrypt = require("bcryptjs")
let salt = bcrypt.genSaltSync(5)
let hash = bcrypt.hashSync("password", salt)


function hashingPassword(password) {
    return bcrypt.hashSync(password, salt)

}

function comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)

}

module.exports = {hashingPassword, comparePassword}