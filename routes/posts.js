const express = require('express');
const router = express.Router();

// Load Project model
const Project = require('../models/Post');

// GET request - Posts
router.get('/', (req, res) => {
    res.send('podle user id? vypsat posts');
  });

// GET request - Add Post
router.get('/add', (req, res) => {
    res.render('add_post');
  });


  module.exports = router;