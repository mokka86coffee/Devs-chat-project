const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     Test route
// @access   Public
router.get('/', (req,resp) => {
    resp.send(`Posts's route`);
});

module.exports = router;