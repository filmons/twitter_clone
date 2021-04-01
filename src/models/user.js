const db = require("../db");

exports.getAllUser = (name, callback) => {
  db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}
////////////////////////////////////////////