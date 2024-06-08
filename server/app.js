const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3500;

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  }
});

app.post("/api/send", (req, res) => {
  const mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
     if(error){
       return res.status(500).send(error);
     }
     res.status(200).send("Email sent successfully");
  });
});

app.get("/api", (req, res) => {
  console.log("jsem tu")
  res.send({ message: "Hello from Express!" });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
