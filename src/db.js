const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "uuu",
    password: "", // input database password
    database: "twitter_clone"
});

module.exports = db;
