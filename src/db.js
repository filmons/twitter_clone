const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // input database password
    database: "tweet_clone"
});

module.exports = db;