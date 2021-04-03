const jwt = require('jsonwebtoken');

const SECRET = "pouetpouet";

const isAuth = (request, response, next) => {
    const token = request.cookies.authcookie;

    jwt.verify(token, SECRET, (error, user) => {
        if (error) {
            response.send(error.message + ` : Please log in.`);
        } else {
            const { name, username, exp } = user;

            if (Date.now() / 1000 >= exp) {
                response.clearCookie("authcookie");
                response.send("Session expired. Please log in.");
            }

            request.user = { name, username };
            next();
        }
    })
};

module.exports = isAuth;