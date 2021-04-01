const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
<<<<<<< HEAD
    password: "0123abcdefG.", // input database password
    database: "tweet_clone"
=======
    password: "", // input database password
=======
    password: "!1myCetvu6hh", // input database password
>>>>>>> local changes
    database: "twitter_clone"
>>>>>>> Update db.js
});

module.exports = db;