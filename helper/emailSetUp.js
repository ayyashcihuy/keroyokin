const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'bambangpahawang@gmail.com',
            pass: 'ipdhi2012',
         },
    secure: true,
});

module.exports = transporter