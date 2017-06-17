
var fs = require('fs');
var Contact = require('../model/contact');
module.exports = {
	getContacts: function (req, res) {
		Contact.find(function (err, contact) {
			if (err) {
				throw err
			}
			res.json(contact);
		});
	},
	saveContact: function (req, res, next) {
		var contact = req.body;
		if (req.files) {
			req.files.forEach(function (file) {
				console.log(file);
				var fileName = 'prof_pic_' + contact.email + '.jpg';
				fs.rename(file.path, 'public/prof_pics/' + fileName, function (err) {
					if (err) throw err;
				})
				var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
				contact.profile_pic_url = fullUrl + '/' + fileName
			})
		}
		Contact.create(contact, function (err, contact) {
			if (err) {
				console.log(err);
			} else {
				console.log("Contact " + contact.first_name + " saved");
				res.send("Contact " + contact.first_name + " saved");
			}
		});
	},
	findContactById: function (req, res, next) {
		var id = req.params.id;
		Contact.findById(id, function (err, contact) {
			res.json(contact);
		});
	},
	editContactById: function (req, res) {
		var id = req.params.id;
		var contact = req.body;
		if (req.files) {
			req.files.forEach(function (file) {
				console.log(file);
				var fileName = 'prof_pic_' + contact.email + '.jpg';
				fs.rename(file.path, 'public/prof_pics/' + fileName, function (err) {
					if (err) throw err;
				})
				var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
				contact.profile_pic_url = fullUrl + '/' + fileName
			})
		}
		Contact.update({ _id: id }, contact, function (err, affected, resp) {
			res.send("Contact: " + contact.first_name + " updated");
		});
	},
	deleteContactById: function (req, res) {
		var id = req.params.id;
		Contact.deleteOne({ _id: id }, function (err, removed) {
			if (err) {
				console.log(err);
			} else {
				res.send("Contact has been removed");
			}
		})
	}
}