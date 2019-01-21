var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'narayanaphp90@gmail.com',
    pass: 'abdulkalam'
  }
});

var mailOptions = {
  from: 'narayanaphp90@gmail.com',
  to: 'sjvrrn@gmail.com',
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