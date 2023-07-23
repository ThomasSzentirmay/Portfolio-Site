const express = require("express");
const app = express();
const port = process.env.PORT || 3333; 
const nodemailer = require("nodemailer");
require("dotenv").config();


// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// LOAD ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

// CONTACT ME FORM ROUTE
const transporter = nodemailer.createTransport({
  service: "gmail", // Specify the email service provider
  auth: {
    user: process.env.GMAIL_USER, // Replace with your Gmail username/email
    pass: process.env.GMAIL_PASS, // Replace with your Gmail password
  },
});

app.post("/sendEmail", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "tomlaszlo7@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email", details: error });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// START SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});