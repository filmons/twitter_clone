const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "!1myCetvu6hh", // input database password
    database: "twitter_clone"
});

module.exports = db;