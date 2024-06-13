var nodemailer = require('nodemailer');

function main(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bkoehler2012@gmail.com',
          pass: 'uafh htww dmbp fueq '
        }
      });

      var mailOptions = {
        from: req.body.email,
        to: 'bkoehler2012@gmail.com',
        subject: req.body.subject,
        text: req.body.comment
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

// Script.js
function validate(req, res) {
	let form = req.body;
	let name =
		form.name;
	let subject =
		form.subject;
	let email =
		form.email;
	let message =
		form.comment;
	let error_message =
		form.message;

	let errors = [];

	if (name.length < 5) {
		errors.push("Please Enter a valid Name");}
	if (subject.length < 3) {
		errors.push("Please Enter a Correct Subject");}
	if (email.indexOf("@") == -1 || email.length < 6) {
		errors.push(
			"Please Enter a valid Email");}
	if (message.length <= 3) {
		errors.push(
			"Please Enter More Than 3 Characters");}

	if (errors.length > 0) {
		return false;}
	else {
		return true;}}


module.exports = { main, validate };
