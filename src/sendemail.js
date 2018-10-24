var aws = require('aws-sdk');

//this is the aws config with the keys from .env
aws.config = ({ "accessKeyId": process.env.REACT_APP_AWS_KEY_ID, "secretAccessKey": process.env.REACT_APP_SECRET_KEY, "region": "us-west-2" })


// this function send the informatin from the form to email reciepient
module.exports = function(formInfo) {
  // console.log('formInfo at top of send email', formInfo.resume)

// This address must be verified with Amazon SES.
  const sender = 'Sender Name <roger.neil.davenport@gmail.com>';
  const recipient = 'roger@roger-davenport.com';
  // let dayForSubject = formInfo.date.getDay();
  const subject = `${formInfo.subject} `;

  // The email body for recipients with non-HTML email clients.
  const body_text = `${formInfo.subject}`;
  let body_resume;
  if (formInfo.subject === 'Job Application') {
    body_resume = `<li>Resume from ${formInfo.name}</li>`;
    body_resume = formInfo.resume.map( item => `<li>${item}</li>`).join("");
  }
  if (formInfo.subject === 'Request For Estimate') {
    body_resume = ``;
  }
  
  
    const body_html = `<html>
<head></head>
<body>
  <h1>${formInfo.subject}</h1>
  <ul>
    <li>Name: ${formInfo.name}</li>
    <li>Email: ${formInfo.email}</li>
    <li>Phone: ${formInfo.phone_number}</li>
    <li>Date and Time: ${formInfo.date}</li>
    <li>Message:${formInfo.message} </li>
    <li>--------------------------------------</li>
    <li>Resume</li>
    ${body_resume}
  </ul>
</body>
</html>`;
// console.log('html body', body_html);

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