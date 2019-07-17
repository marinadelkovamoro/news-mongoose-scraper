// Dependencies
const express = require("express");

// Initialize Express
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("hello");
});






// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });
  