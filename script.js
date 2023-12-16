
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'slam.salim2006@gmail.com',
    pass: 'salimdev2006'
  }
});

var mailOptions = {
  from: 'slam.salim@gmail.com',
  to: 'slam.salim2006@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("error" , error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});