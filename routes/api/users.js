const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

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
    (req,resp) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        console.log(req.body);
        resp.send(`User's route`);
    }
);

module.exports = router;