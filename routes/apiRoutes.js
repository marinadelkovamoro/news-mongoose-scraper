const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

var app = express();

app.get("/", function(req, res){
    res.redirect("/articles");
})

app.get("/articles", function(req, res){
   //get all the articles from db
})

app.get("/scrape", (req, res) => {

    axios.get("https://sandiegotheatres.org/").then((response) => {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(response.data);

        // An empty array to save the data that we'll scrape
        const results = [];

        // Select each element in the HTML body from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("div.post").each(function (i, element) {

            const title = $(element).find("a").attr("title");
            const link = $(element).find("a").attr("href");
            const summary = $(element).find("p").text();

            // Save these results in an object that we'll push into the DATABASE collection scrapedData
            db.scrapedData.insert({
                title: title,
                link: link,
                summary: summary
            });
        });
    });
});