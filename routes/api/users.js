const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');

// @route    POST api/users
// @desc     Test route
// @access   Public
router.post(
    '/', 
    [
        check('name', '!name').not().isEmpty(),
        check('email', '!email').isEmail(),
        check('password', '!password').isLength({min: 6})
    ],
    async (req,resp) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        try {
            let user = User.findOne({ email });

            if (user) {
                resp.status(400).json({errors: [{ msg: 'User already exists' }]})
            }
            console.log(req.body);
            resp.send(`User's route`);
        } catch(err) {
            console.log('users error - ', err);
            resp.status(500).send('Server error');
        }
    }
);

module.exports = router;