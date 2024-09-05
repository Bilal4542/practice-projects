const express = require("express");

const router = express.Router();

router.route('/').get((req,res) => {
    res.status(200).send('Welcome to Cloud Breeze IT software House using Router');
});
router.route('/register').get((req,res) => {
    res.status(200).send('Here You Register Yourself in Cloud Breeze IT software House using Router');
});
module.exports = router;