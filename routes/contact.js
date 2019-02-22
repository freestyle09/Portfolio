const express = require('express');
const router = express.Router();
const Joi = require('joi');
const nodemailer = require('nodemailer');
const prod = require('../config/prod');
const keys = require('../config/keys');

router.post('/', (req, res) => {
  const schema = {
    from: Joi.string().required(),
    firstName: Joi.string()
      .min(3)
      .required(),
    surname: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(3)
      .email()
      .required(),
    phone: Joi.string()
      .min(3)
      .required(),
    message: Joi.string()
      .min(10)
      .required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: prod.username,
      pass: prod.password
    }
  });

  let mailOptions = {
    from: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    cc: prod.username, // list of receivers
    to: `${req.body.firstName} ${req.body.surname} <${req.body.email}>`,
    subject: `Wiadomość - Portfolio`, // Subject line
    text: 'Hello world', // plain text body
    html: `<h3>Dziękujemy za przesłanie wiadomości</h3>
           <h4>Jest to wiadomość automatyczna prosimy na nią nie odpowiadać</h4>
           <h4>Odpowiemy na Państwa wiadomość tak szybko jak będzie to możliwe</h4>
           <div style="color: #424242">
           <div>Imię: ${req.body.firstName}</div> 
           <div>Nazwisko: ${req.body.surname}</div>
           <div>Adres E-mail: ${req.body.email}</div>
           <div>Numer telefonu: ${req.body.phone}</div>
           <div>Treść wiadomości: ${req.body.message}</div></div>
`
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      throw err;
    }

    res.send(req.body);
  });
});

module.exports = router;
