
var Contact = require('../model/contact');

module.exports = {
	getContacts : function(req, res) {
		Contact.find(function (err, contact) {
	        if (err) {
	            throw err
	        }
	        res.json(contact);
	    });
	},
	saveContact : function(req, res, next) {
		var contact = req.body;
		Contact.create(contact, function(err, contact) {
            if(err) {
                console.log(err);
            } else {
                console.log("Contact " + contact.first_name + " saved");
                res.send("Contact " + contact.first_name + " saved");
            }
        });
	},
	findContactById : function(req, res, next) {
		var id = req.params.id;
		Contact.findById(id, function(err, contact) {
			res.send("Contact: " + contact.first_name + " " + contact.last_name);
		});
	},
	editContactById : function(req, res) {
		var id = req.params.id;
		var contact = req.body;
		Contact.update({_id: id}, contact, function(err, affected, resp) {
   			res.send("Contact: " + contact.first_name + " updated");
		});
	},
	deleteContactById : function(req, res) {
		var id = req.params.id;
		Contact.deleteOne({_id: id}, function(err, removed) {
			if (err) {
				console.log(err);
			} else {
				res.send("Contact has been removed");
			}
		})
	}
}