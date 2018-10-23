var aws = require('aws-sdk');

//this is the aws config with the keys from .env
aws.config = ({ "accessKeyId": process.env.REACT_APP_AWS_KEY_ID, "secretAccessKey": process.env.REACT_APP_SECRET_KEY, "region": "us-west-2" })


// this function send the informatin from the form to email reciepient
module.exports = function(formInfo) {

// This address must be verified with Amazon SES.
  const sender = 'Sender Name <roger.neil.davenport@gmail.com>';
  const recipient = 'roger@roger-davenport.com';
  // let dayForSubject = formInfo.date.getDay();
  const subject = `Job Application ${formInfo.date}`;

  // The email body for recipients with non-HTML email clients.
  const body_text = 'Request for quote this is the body of the message';
            
  // The HTML body of the email.
  const body_html = `<html>
<head></head>
<body>
  <h1>Request for Estimate</h1>
  <ul>
  <li>Name: ${formInfo.name}</li>
  <li>Email: ${formInfo.email}</li>
  <li>Phone: ${formInfo.phone}</li>
 <li>Date and Time: ${formInfo.date}</li>
 <li>Message: ${formInfo.message}</li>
 <li>File: ${formInfo.file}</li>
  </ul>
  
</body>
</html>`;

  // The character encoding for the email.
  const charset = 'UTF-8';

  // Create a new SES object. 
  var ses = new aws.SES();
  
  // Specify the parameters to pass to the API.
  var params = { 
    Source: sender, 
    Destination: { 
      ToAddresses: [
        recipient, 
      ],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset, 
        },
        Html: {
          Data: body_html,
          Charset: charset,
        },
        
      },
    },
    
  };
  
  //Try to send the email.
  ses.sendEmail(params, function(err, data) {
    // If something goes wrong, print an error message.
    
    if(err) {
      console.log(err.message);
    } else {
      console.log('Email sent! Message ID: ', data.MessageId);
    }
  });



}