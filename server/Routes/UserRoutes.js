const router = require('express').Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models/db.js');
router.post('/register', async (req, res) => {
    try {
        //get user from body and sanitize
        let error = {}
        if (!req.body.userEmail) {
            error.email = {
                code: "BLANK_EMAIL",
                msg: "you must provide a valid email id"
            }
        }
        if (!req.body.userPassword || req.body.userPassword.length < 8) {
            error.password = {
                code: "INVALID_PASSWORD",
                msg: "you must provide a password that is 8 or more characters long"
            }
        }
        if (!req.body.userPhone || req.body.userPhone.length < 11) {
            error.phone = {
                code: "INVALID_PHONE",
                msg: "you must provide a valid BD phone number eg 017xxx..."
            }
        }
        if (Object.keys(error).length > 0) {
            return res.status(400).json(error)
        }
        const user = {
            ...req.body,
            userVerificationCode: "",
            userVerificationCodeHash: "",
            userIP: "",
            userRole: "user"
        }
        //generate Verification Token 
        user.userVerificationCode = Math.floor(Math.random() * 4934)
        //hash password        
        user.userPassword = await bcrypt.hash(user.userPassword, 8)
        //save user
        const newUser = await db.User.create({ ...user })

        //configure email
        // const from = "send2shakil@gmail.com";
        // const sub = `Welcome! ${req.body.name}; sign up successfull!`;
        // const message = `H! ${req.body.name}, Welcome you have succssfully signed in into our portal. Enjoy!`
        // const msg = new emailConfig(req.body.email, from, sub, message);

        // send email
        //     await sgMail.send(msg)
        //     res.status(201).send({
        //         user,
        //         token
        //     })
        // } catch (e) {
        //     res.status(500).send(e)
        //     console.log(e);
        // }
        res.status(201).send({ ...newUser.dataValues })

    } catch (e) {
        if (e.name == 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                code: "DUPLICATE", msg: "Suspected duplicate account creation attempt prevented"
            })

        }
        console.log(e)

        res.status(400).json({
            code: "UNEXPECTED", msg: "could not create your account"
        })



    }

})




module.exports = router