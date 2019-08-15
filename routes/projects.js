const express = require('express');
const router = express.Router();

// Load Project model
const Project = require('../models/Project');

// Load User Model
const User = require('../models/User');

// GET request - Projects
router.get('/', (req, res) => {
    res.send('podle user id? vypsat projekty');
  });

// GET request - Add Project
router.get('/add', (req, res) => {
    res.render('add_project');
  });


// POST - Add Project
router.post('/add', (req, res) => {
    const { name } = req.body;
    let errors = [];

    if (!name) {
        errors.push({ msg: 'Please enter Project Name' });
    }
  
    if(errors.length > 0){
      res.render('add_project', {
        errors
      });
    } else {
      const project = new Project({ project_name: name });
      project
        .save()
        .then(project => {
            User.findOne({ _id: req.user._id})
            .then(user => {
                if (user) {
                    user.users_projects.push(project);
                    user.save();
                } else {
                    Console.log(`Author of the project ${project.name} was not found`);
                }
            })
            .catch(err =>{
                console.log(err);
            });
            req.flash('success_msg', 'New Project Saved');
            res.redirect('/dashboard');
            console.log(`New project saved: ${project.project_name}, project_id:${project._id}, user: ${req.user.name}`);
        })
        .catch(err =>{
            console.log(err);
        });
    }
  });


  module.exports = router;