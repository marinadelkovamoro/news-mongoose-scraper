// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// Initialize Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // Routes
// require("./routes/apiRoutes")(app);

// connection to mongoDB with mLab MongoDB provision in order to deploy the appon Heroku 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });




app.get("/", (req, res) => {
    res.send("hello");
});


// Listen on port 3000
app.listen(3000, function () {
    console.log("App running on port 3000!");
});
