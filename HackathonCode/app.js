const bodyParser = require('body-parser');
var express = require('express');
var ejs = require('ejs');
const { runInNewContext } = require('vm');
var app = express();

const views = __dirname + '/views/';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render(getView('home.ejs'), {
        name: req.query.name
    }) // express deals with the formattin
})

app.get('/input', (req, res) => {
    res.render(getView('input.ejs')) // express deals with the formatting
})

app.post('/input', urlencodedParser, (req, res) => {
    console.log(req);
    res.redirect('/?name=' + req.body.name);
})

app.get('/about', (req, res) => {
    res.sendFile(getView('about.html'))
    // res.send('<h1>About Us</h1><p>This site is made with Node.js and Express</p>')
})

function getView (fileName) {
    return views + fileName;
}

app.listen(8080);