const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const User = require('../../models/user.js');

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
            let user = await User.findOne({ email });

            if (user) {
                console.log('got user - ', user);
                return resp.status(400).json({errors: [{ msg: 'User already exists' }]});
            }

            const avatar = gravatar.url( email, { s: '200', r: 'pg', d: 'mm' } )
            user =  new User({
                name,
                email,
                avatar,
                password
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            console.log('user saved');

            resp.send(`User's route`);
        } catch(err) {
            console.log('users error - ', err);
            resp.status(500).send('Server error');
        }
    }
);

module.exports = router;