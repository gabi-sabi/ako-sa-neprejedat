require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3500;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/send', (req, res) => {
  console.log({ body: req.body });
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(200).send('Email sent successfully');
  });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
