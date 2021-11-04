
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

//AFTER THAT I CREATE A NEW USER'S

exports.authentificate= (username, callback) => {
  db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
    }) 
}

/////// TODAY
exports.getByUsername = (username, callback) => { // callback = function
  console.log(`got into user.js/getByUsername` + ` username value: ` + username);
  // console.log(`username value: ` + username);
  // console.log(`getByUsername(username) value: ` + username);
  // db.query(`SELECT username FROM user WHERE username = "${username}";`), (error, result) => {
  db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => { // if get result, > callback
          if (error) {
              console.log("Error:", error);
              callback(error, null);
              return;
          }
          callback(null, result);
          console.log(`getByUsername SUCCESS`);
          console.log(`callback result: ` + result);
      }) // end of callback
      // check every step 
}

exports.usernameCheck = (username, callback) => {
  db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => {
      if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
      }
      callback(null, result); // leads to /userController.js/User.usernameCheck
  })
}

exports.createUser = (user, callback) => {
  console.log(`createUser: ` + user);
  // console.log(`+++(user): ${user}`); // need obj that contains obj.name pass etc
  console.log(`+++(user) keys: ` + Object.keys(user));
  db.query(`INSERT INTO user 
  (username, password, first_name, last_name, email, phone_number, city) 
    VALUES ("${user.username}", "${user.password}", 
    "${user.first_name}", "${user.last_name}", 
      "${user.email}", "${user.phone_number}", "${user.city}");`, (error, result) => {
      if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
      }

      callback(null, result);
  })
}

