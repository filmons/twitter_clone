const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "twitter_clone"
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to dabase works!");
});

module.exports = db;