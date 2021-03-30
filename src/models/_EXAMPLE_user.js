// const db = require("../db");

// exports.getByUsername = (username, callback) => {
//   db.query(`SELECT * FROM users WHERE username = "${username}";`, (error, result) => {
//     if (error) {
//       console.log("error: ", error);
//       callback(error, null);
//       return;
//     }

//     callback(null, result);
//   })
// }

// exports.create = (user, callback) => {
//   db.query(`INSERT INTO users (name, username, password) VALUES ("${user.name}", "${user.username}", "${user.password}");`, (error, result) => {
//     if (error) {
//       console.log("error: ", error);
//       callback(error, null);
//       return;
//     }

//     callback(null, result);
//   })
// }