const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Creating new Express app
const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
const dbkey = require("./config/keys").MongoURI;

//Creating connection to Mongo Atlas database
mongoose.connect(dbkey, {useNewUrlParser: true})
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => {
    console.log("Error: " + err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("Database connected");
})

//Initialize EJS templates
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Express body parser
app.use(express.urlencoded({ extended: true }));

// Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

  // Connect flash
  app.use(flash());

  // Global Vars
  app.use((req, res, next) => {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
  });

//To the get command we will then pass our EJS template
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));
app.use("/projects", require('./routes/projects'));
app.use("/projects/posts", require('./routes/posts'));

//This command should be at the end of the file, in localhost it will run probably on port 5000
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})