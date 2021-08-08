const nodemailer = require("nodemailer")
const express = require('express');
const router = express.Router();

class EmailHandler {

    constructor(email = process.env.EMAIL, password = process.env.PASSWORD) {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password
            }
        })
    }

   async send(data) {
        return await this.transport.sendMail({
            from: data.email + "👻",
            to: process.env.EMAIL,
            subject: "Personal website - CLIENT",
            html: "<h1>" + data.name + "</h1><p>" + data.message + "</p><p>" + data.number + "</p>"
        })
    }
}

router.get("/api/contact", (req, res) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.send(JSON.stringify({
        info: "hi there"
    }))
})

router.post('/api/contact', (req, res) => {

    let data = req.body
    let emailHandler = new EmailHandler()
    emailHandler.send(data).then(
        emailResponse => {
            // res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ info: emailResponse}));
        }
    )

});

module.exports = router