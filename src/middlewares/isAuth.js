const jwt = require("jsonwebtoken");

const SECRET = "pouetpouet";

const isAuth = (request, response, next) => {
  const token = request.cookies.authcookie;
  console.log(`token: ` + token);

  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      response.redirect("/login");
    } else {
      const { name, username, exp } = user;

      if (Date.now() / 1000 >= exp) {
        response.clearCookie("authcookie");
        response.send("Session expired. Please log in.");
      }
      console.log(user);
      console.log(name);
      console.log(username);

      request.user = { name, username };
      next();
    }
  });
};

module.exports = isAuth;
