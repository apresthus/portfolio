export default function handler(req, res) {

    "use strict";
    const nodemailer = require("nodemailer");
    const sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_APIKEY
  }
}
    console.log(req)
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport(sgTransport(options));
    
      // send mail with defined transport object
      let email = await transporter.sendMail({
        from:`"Portfolio - Contact Form" <${req.email}>`, // sender address
        to: "apresthus@gmail.com", // list of receivers
        subject: "New Email from Portfolio!", // Subject line
        text: req.message, // plain text body
        html: <p>{req.message}</p>, // html body
      });
      
    
      console.log("Message sent: %s", email.messageId);
      res.status(200).json({ message: email.messageId })
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    }
    
   // main().catch((err) => {res.status(500).json({ message: err })});

  }