const express = require('express');
const router = express.Router();

//GET request to render views/login
router.get("/login", (req, res) => {
    res.render("login");
});

//GET request to render views/register
router.get("/register", (req, res) => {
    res.render("register");
});

//POST request from Register form
router.post("/register", (req, res) => {
    const {email, password1, password2} = req.body;



})

module.exports = router;