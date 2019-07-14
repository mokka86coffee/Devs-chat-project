const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', (req,resp) => {
    resp.send(`Auth's route`);
});

module.exports = router;