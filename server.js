const express = require("express");
const app = express();
const port = process.env.PORT || 3333; 


// MIDDLEWARE
app.use(express.static("public"));


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


// START SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});