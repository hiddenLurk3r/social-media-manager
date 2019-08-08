const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// GET request to render views/login
router.get("/", (req, res) => {
    res.render("welcome");
});

// GET request to render views/dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard", {
        name: req.user.name
    });
});

// Redirect to users/login
router.get("/login", (req, res) => {
    res.redirect("users/login");
});

// Redirect to users/register
router.get("/register", (req, res) => {
    res.redirect("users/register");
});


module.exports = router;