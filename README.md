# news-mongoose-scraper
A web app that lets users view and leave comments on the latest news

## How it works:

Whenever a user visits the site, the app scrapes stories from https://www.bloomberg.com/ and display them for the user. Each scraped article is saved to the application's database. 

At a minimum, the app scrapes and display the following information for each article:

 * Headline - the title of the article
 * Summary - a short summary of the article
 * URL - the url to the original article

Users are also able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles. 

Lastly, users can delete comments left on articles.

All stored comments are visible to every user.

## Technologies used:

* node.js
* express
* express-handlebars
* mongoose
* cheerio
* axios
