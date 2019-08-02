const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const session = require('express-session');

//Creating new Express app
const app = express();


//Creating connection to Mongo Atlas database
mongoose.connect('mongodb+srv://skozak:zY5LzWh3zbQHuBKB@mediamanager-nooer.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.catch(err => {
    console.log("Error" + err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("All good");
})

//Initialize EJS templates

app.use(expressLayouts);
app.set('view engine', 'ejs');

//Express body parser

app.use(express.urlencoded({ extended: true }));

//To the get command we will then pass our EJS template

app.use("/", require('./routes/routes'));

//This command should be at the end of the file, in localhost it will run probably on port 5000
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})