// // const express = require('express')
// // const bodyParser = require('body-parser')
// // const cors = require('cors')
// // const app = express()
// const nodemailer = require('nodemailer')

// // import sendmail from 'sendmail';

// // sendmail({
// //     from: 'kedsnaik@gmail.com',
// //     to: 'kedarnaik515@gmail.com',
// //     subject: 'test sendmail',
// //     html: 'Mail of test sendmail ',
// //   }, function(err, reply) {
// //     console.log(err && err.stack);
// //     console.dir(reply);
// //     console.log("yesss");
// // }); 
// // "use strict";

// // "use strict";
// // const port = 3000;
// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 3000,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass // generated ethereal password
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '<kedsnaik@gmail.com>', // sender address
//     to: "kedarnaik515@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
// // app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 3000,
//     service : 'gmail',
//     auth: {
//       user: 'kedsnaik@gmail.com', // generated ethereal user
//       pass: 'kedarnaik515!!!!!' // generated ethereal password
//     }
// })

// var mailOptions = {
//   from: 'kedsnaik@gmail.com', // sender address
//   to: 'kedarnaik515@gmail.com', // list of receivers
//   subject: 'Hello ', // Subject line
//   text: `Hello.. Test Mail`, // plain text body
// }

// transporter.sendMail(mailOptions,function(error,info){
//   if(error){
//     console.log(error);
//   }else{
//     console.log('Email sent: '+info.response);
//   }
// })

import React from 'react';
import { Email, Item, A} from 'react-html-email';
export default function InlineLink({name, children}) {
  return (
  <Email title='link'>
    <Item>
       Hello {name}
       <A style={{ paddingLeft: 10 }}  href='https://mailtrap.io'>Click me!</A>
    </Item>
    <Item>
      {children}
    </Item>
  </Email>
)};