export default function handler(req, res) {

    "use strict";
  const body = JSON.parse(req.body);

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_APIKEY)
    const msg = {
      to: 'apresthus@gmail.com', 
      from: process.env.SENDGRID_USERNAME, 
      subject: 'NEW EMAIL FROM PORTFOLIO CONTACT FORM',
      text: `${body.email} wrote: ${body.message}`,
      html: `<p>${body.email} wrote: ${body.message}}</p>`,
    }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
       res.status(200).send({message:'Email sent successfully',success:true})
      })  
      .catch((error) => {
        console.error(error)
        res.status(500).send({message:'Error sending email',error:error})
      })

  }