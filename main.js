const express = require('express');
const path = require('path');
const nodemon = require('nodemon');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render("home");
})

app.get('/work', (req, res) => {
    res.render("work");
})
app.get('/projects', (req, res) => {
    res.render("projects");
})
app.get('/education', (req, res) => {
    res.render("education");
})
app.get('/interests', (req, res) => {
    res.render("interests");
})
app.get('/skills', (req, res) => {
    res.render("skills");
})





app.listen(8080);
console.log("Server is listening on port 8080");