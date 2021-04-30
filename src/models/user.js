const db = require("../db");

exports.getByUsername = (username, callback) => {
  db.query(
    `SELECT * FROM user WHERE username = "${username}";`,
    (error, result) => {
      if (error) {
        console.log("Error:", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};

exports.usernameCheck = (username, callback) => {
  db.query(
    `SELECT * FROM user WHERE username = "${username}";`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};

exports.createUser = (user, callback) => {
  db.query(
    `INSERT INTO user 
    (username, password, first_name, last_name, 
        birth_date, email, phone_number, city) 
      VALUES ("${user.username}", "${user.password}", 
      "${user.first_name}", "${user.last_name}", "${user.birth_day}",
        "${user.email}", "${user.phone_number}", "${user.city}");`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      callback(null, result);
    }
  );
};
