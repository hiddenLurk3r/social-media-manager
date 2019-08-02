const express = require('express');
const mongoose = require('mongoose');

//Creating new Express app
const app = express();


//Creating connection to Mongo Atlas database
mongoose.connect('mongodb+srv://skozak:<password>@mediamanager-nooer.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("All good");
})

//To the get command we will then pass our EJS template

app.get('/', (req, res) => {
    res.send("Hello!");
});

//This command should be at the end of the file, in localhost it will run probably on port 5000
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})