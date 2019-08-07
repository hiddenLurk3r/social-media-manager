const express = require('express');
const router = express.Router();

//GET request to render views/login
router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;