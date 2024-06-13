var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bkoehler2012@gmail.com',
    pass: 'uafh htww dmbp fueq '
  }
});

var mailOptions = {
  from: 'z3nrider@gmail.com',
  to: 'bkoehler2012@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});