export default function handler(req, res) {

    "use strict";
    const nodemailer = require("nodemailer");
    console.log(req)
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from:`"Portfolio - Contact Form" <${req.email}>`, // sender address
        to: "apresthus@gmail.com", // list of receivers
        subject: "New Email from Portfolio!", // Subject line
        text: req.message, // plain text body
        html: <p>{req.message}</p>, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: info.messageId })
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    }
    
   // main().catch((err) => {res.status(500).json({ message: err })});

  }