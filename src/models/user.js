const db = require("../db");


exports.getByUsername = (username, callback) => {
    // console.log(`getByUsername(username) value: ` + username);
    db.query(`SELECT username FROM user WHERE username = "${username}"`), (error, result) => {
        if (error) {
            console.log("Error:", error);
            callback(error, null);
            return;
        }
        console.log(`getByUsername SUCESS`);
        callback(null, result);
    }
}

exports.createUser = (user, callback) => {
    // const user = requestBodyObject;  
    console.log(`createUser: ` + user);
    // console.log(`+++(user): ${user}`); // need obj that contains obj.name pass etc
    // console.log(`+++(user) keys: ` + Object.keys(user));
    // console.log(`+++(params) : ${requestBodyObject}`);


    // db.query(`INSERT INTO user (name, username, password) VALUES ("${user.name}", "${user.username}", "${user.password}");`, (error, result) => {

    // db.query(`INSERT INTO user (username, password, first_name, last_name, birth_date, email, phone_number, city) 
    //   VALUES ("${user.username}", "${user.password}", "${user.first_name}", "${user.last_name}", "${user.birthday}",
    //     "${user.email}", "${user.phone_number}", "${user.city}");`, (error, result) => {
    //  
    db.query(`INSERT INTO user (username, password, first_name, last_name, birth_date, email, phone_number, city) 
      VALUES ("${user.username}", "${user.password}", "${user.first_name}", "${user.last_name}", "${user.birthday}",
        "${user.email}", "${user.phone_number}", "${user.city}");`, (error, result) => {



        // db.query(`SELECT * FROM user;`, (error, result) => {

        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}

// AFTER THAT I CREATE A NEW USER'S

exports.authentificate = (username, callback) => {
    db.query(`SELECT * FROM user WHERE username = "${username}";`, (error, result) => {
        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}