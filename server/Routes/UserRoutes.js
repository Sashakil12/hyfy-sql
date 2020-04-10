const router = require('express').Router()

router.post('/register', (req, res) => {
    console.log(req.body)

    try {
        //get user from body and sanitize
        const user = {
            ...req.body,
            userVerificationCode: "",
            userVerificationCodeHash: ""
            userRole: ""
        }

        const token = await user.getToken()
        await user.save()
        //generate Token with bcrypt

        //generate verification token with bcrypt

        //save user

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
    })

})




module.exports = router