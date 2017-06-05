var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	User.findOne({}, function(error, doc){
		if (error) {
			return res.send('Error mier');
		}

		res.render('node', { email: doc.email });
	});
});

router.post('/', function(req, res, next) {
	var email = req.body.email;
	var user = new User({
		firstName: 'Andrés',
		lastName: 'Matta',
		password: 'contraseña',
		email: email
	});

	user.save();
	res.redirect('/');
});

module.exports = router;
