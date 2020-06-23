# Google-Books-React-Mongo

In this project I've used Mongo, Express, React, and Node.js to build my first MERN stack application.<br>
This was a difficult project to tackle, but perservierance and hard work paid off and taught me lots.<br>

This application is designed to interact with the Google Books API. You can search for books you'd like to read and then add them to the list to view later. Then after you've read them you can delete them from the list!

## Getting Started

Open [the live demonstration](https://google-books-react-bp.herokuapp.com/) in your browser.

### Prerequisites

* [Git](https://gitforwindows.org/)

* [Node.js](Nodejs.org)

* Node Package Manager (Installed with Node.js)

* A Web-browser


### Installing

* Clone the github repository to your local machine using 'git clone' command within the GitBash terminal.
* Navigate to the directory you cloned the repository to via your command terminal using 'cd'.
* Install the packages using 'npm install'.
* Start the application with 'npm start'.

You should have a browser window open with the locally run application.

## Built With

* [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) - A package that assembles a basic React application to then be fleshed out.
* [React](https://www.npmjs.com/package/react) - The Javascript library pioneered by tech giant Facebook.
* [React-Router-DOM](https://www.npmjs.com/package/react-router-dom) - A router that works in conjunction with Express to deliver React page views.
* [Node](Nodejs.org) - The Javascript enviornment used for development of this application.
* [Node Package Manager](https://www.npmjs.com/) - Used to manage the different Javascript packages used in this application.
* [Bootstrap](https://getbootstrap.com/) - The CSS library used to help make stylizing the application easier.
* [Express](https://www.npmjs.com/package/express) - Used to manage HTTP requests and deliver content.
* [Mongoose](https://www.npmjs.com/package/mongoose) - A package used to work with MongoDB.
* [Axios](https://www.npmjs.com/package/axios) - A package used to interact with the RESTful API proxy server through HTTP requests.

## TODOs: 
* Code to prevent duplicate SAVED entries, this can be done by searching the database for the ID of the book we just hit save on, compairing any results, and either creating a new entry or alerting the user that it already exisists.<br>
* Add some CSS so it doesn't looks so.. bootstrappy.<br>
* Refactor code.


## Authors

* **Branden Patten** - *Initial work* - [PattenBranden](https://github.com/pattenbranden)

See also the list of [contributors](https://github.com/pattenbranden/react-books/graphs/contributors) who participated in this project.
