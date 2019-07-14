const express = require('express');
const router = express.Router();

// @route    GET api/profile
// @desc     Test route
// @access   Public
router.get('/', (req,resp) => {
    resp.send(`Progfile's route`);
});

module.exports = router;