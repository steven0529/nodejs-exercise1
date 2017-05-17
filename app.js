var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var api = require('./controller/api');

app.get('/api/contacts', api.getContacts);
app.post('/api/contacts', api.saveContact);
app.get('/api/contacts/:id', api.findContactById);
app.put('/api/contacts/:id', api.editContactById);
app.delete('/api/contacts/:id', api.deleteContactById);

app.listen(3000);
console.log("listening at port 3000");