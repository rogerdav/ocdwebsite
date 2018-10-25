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
  const subject = `${formInfo.subject} from ${formInfo.name}`;

  // The email body for recipients with non-HTML email clients.
  const body_text = `${formInfo.subject}`;
  let body_resume, body_html;
  if (formInfo.subject === 'Job Application') {
    body_resume = `<p>Resume from ${formInfo.name}</p>`;
    body_resume = formInfo.resume.map( item => `<p>${item}</p>`).join("");
    body_html = 
    `<html>
     <head></head>
     <body>
     <h1>${formInfo.subject}</h1>
     <ul>
        <li>Name: ${formInfo.name}</li>
        <li>Email: ${formInfo.email}</li>
        <li>Phone: ${formInfo.phone_number}</li>
        <li>Eligible to work: ${formInfo.canwork}</li>
        <li>Date and Time: ${formInfo.date}</li>
        <li>Message:${formInfo.message} </li>
        <li>Best Time: ${formInfo.time} </li>
        <li>--------------------------------------</li>
        <li><h3>Resume<h3></li>
      </ul>
      ${body_resume}
      </body>
      </html>`;

    };

  if (formInfo.subject === 'Call Request') {
    let tel_href = `tel:+1-`
    body_html = 
    `<html>
     <head></head>
     <body>
     <h1>${formInfo.subject}</h1>
     <ul>
        <li><h3>Name: ${formInfo.name}</h3></li>
        <li><h3>Email: ${formInfo.email}</h3></li>
        <li><a href="tel:+1-206-353-9012"><h5>${formInfo.phone_number}</h5></a></li>
        <li><h3>Date and Time: ${formInfo.date}</h3></li>
        <li><h3>Message:${formInfo.message} </h3></li>
        <li><h3>Best Time: ${formInfo.time} </h3></li>
        <li><h3>--------------------------------------</h3></li>
     </ul>
      
      </body>
      </html>`;
  }
  
  


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