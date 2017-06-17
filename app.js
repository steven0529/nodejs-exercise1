var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var contacts = require('./routes/contacts')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/contacts', contacts)

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
console.log("App started")