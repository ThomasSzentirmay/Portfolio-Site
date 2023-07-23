const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the environment port or 3000 as the default

// Set static folder for serving static files (e.g., CSS, images)
app.use(express.static("public"));

// Handle the home page route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});