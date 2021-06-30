import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();
  const sendMail = async(alert, email)=>{
      let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
          },
        });
    
        let message = (
            '<h1> Thank you for joining with us</h1>' +
            `<h2>Your ${alert} </h2>`
          ); 
    
        //Send email with the message
        await transporter.sendMail({
          from: '"Conference Manager" <nezuswear@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Conference Alert", // Subject line
          html: message
        });
  }

export default sendMail;