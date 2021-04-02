const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/user");

const SECRET = "pouetpouet";
const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration

// exports.signUp = (request, response) => {
//   response.render("signup.ejs");
// }

// exports.newAccount = (request, response) => {
//   const { name, username, password } = request.body;

  // User.getByUsername(username,(error, result) => {
  //   if (error) {
  //     response.send(error.message);

  //   if (result.length !== 0) {
  //     response.send("A user with this username already exists!");
  //   }

  //   const saltRounds = 10;

  //   bcrypt.hash(password, saltRounds, (error, hash) => {
       
  //     if (error) {
  //       response.send(error.message);
  //     }
  //     console.log(hash);
  //     const newUser = {
  //       name,
  //       username,
  //       password: hash
  //     }
      // response.redirect("/");
      // response.send("ok");
      // User.create(newUser, (error, result) => {
      //   if (error) {
      //     response.send(error.message);
      //   }

      // })
//     })
//   });
// }

exports.logIn = (request, response) => {
  response.render("login.ejs");
}

exports.authentificate = (request, response) => {
  const { username, password } = request.body;
      
  console.log(request.body);

  User.getByUsername(username,(error, result) => {

    if (error) {
      response.send(error.message);
    }

    if (result.length === 0) {
      response.send("This user doesn't exist!");
    }

    const hash = result[0].password;
      
   
      bcrypt.compare(password, hash, (error, correct) => {
        console.log("PASSWORD" + hash)
     
        if (error) {
        response.send(error.message);
      }

      if (!correct) {
        response.send("Invalid password!");
      }

      const user = {
        name: result[0].name,
        username: result[0].username,
        exp: MAXAGE
      };

      jwt.sign(user, SECRET, (error, token) => {
        if (error) {
          response.send(error.message);
        }

        request.user = {
          name: result[0].name,
          username: result[0].username,
        };
        response.cookie('authcookie', token, { maxAge: MAXAGE });
        response.redirect('/');
      });

    });
    
  })
}

exports.logOut = (request, response) => {
  // response.clearCookie("authcookie");
  response.redirect("/login");
  
}
