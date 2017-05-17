var mongoose = require('mongoose');
// var connection = mongoose.createConnection('mongodb://localhost:27017/tutorial');
var connection = mongoose.createConnection('mongodb://steven0529:chuck0529@ds143191.mlab.com:43191/heroku_7mtgmrg8');

var Schema = mongoose.Schema;

var contactSchema =  new Schema({
	first_name : String,
	last_name : String,
	address: String, 
	email : String,
	contact_number: String
});

module.exports = connection.model('Contact', contactSchema);