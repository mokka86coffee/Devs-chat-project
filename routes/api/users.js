const express = require('express');
const router = express.Router();

// @route    GET api/users
// @desc     Test route
// @access   Public
router.post('/', (req,resp) => {
    console.log(req.body);
    resp.send(`User's route`);
});

module.exports = router;