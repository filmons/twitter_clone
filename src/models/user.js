
const db = require("../db");


// exports.create = (user, callback) => {
//   db.query(`INSERT INTO user (name, username, password) VALUES ("${user.name}", "${user.username}", "${user.password}");`, (error, result) => {
//     if (error) {
//       console.log("error: ", error);
//       callback(error, null);
//       return;
//     }
//     callback(null, result);
//     })
// }

// AFTER THAT I CREATE A NEW USER'S

exports.getByUsername= (username, callback) => {
  db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
    }) 
}

