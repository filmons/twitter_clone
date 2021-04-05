const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/user");

const SECRET = "pouetpouet";
const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration

exports.signUp = (request, response) => {
    response.render("signup.ejs");
}
exports.newAccount = (request, response) => { // is a function
    const { username, password, email, phone_number, first_name, last_name, birth_day, city } = request.body; // more efficient
    // console.log(request.body);
    // console.log(`username: ` + username);

    User.getByUsername(username, (error, result) => { // < callback is a function with 2 params // model // gets data from db from user.js
        // getByUsername is a MODEL // do stuff with data gotten from server
        // console.log(`username: ` + username);
        // console.log(`+++got into getByUsername`);
        if (error) {
            response.send(error.message);
        } else if (result.length !== 0) {
            response.send("A user with this username already exists!");
        } else {
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, (error, hash) => {
                if (error) {
                    response.send(error.message);
                }
                console.log(`++hashed password: ` + hash);
                const newUser = {
                    username,
                    email,
                    phone_number,
                    first_name,
                    last_name,
                    birth_day,
                    city,
                    password: hash
                }

                // console.log(`+++newUser: ` + newUser);
                User.createUser(newUser, (error, result) => {
                    if (error) {
                        response.send(error.message);
                    }
                    // console.log(`User ${username} created!`);
                    response.redirect("/login");
                })
            })
        }
    });
}
exports.logIn = async(request, response) => {
    const alerts_warning = await request.consumeFlash('warning');
    console.log(alerts_warning);
    // IF ALREADY LOGGED IN, redirect to home, else, render login page <<<
    response.render("login.ejs", { alerts_warning });
}
exports.authentificate = async(request, response) => {
    const { username, password } = request.body;
    // console.log(request.body);

    if (!username || !password)
        await request.flash("warning", "Veuillez remplir tout les champs requis.")
    User.usernameCheck(username, async(error, result) => {
        if (error) {
            response.send(error.message);
        } else if (result.length === 0) {
            await request.flash("warning", "This user doesn't exist.")
            response.redirect("/login");
        } else {

            const hash = result[0].password;

            bcrypt.compare(password, hash, async(error, correct) => {
                console.log("Hashed password: " + hash)
                console.log(`CORRECT: ` + correct);
                if (error) {
                    response.send(error.message);
                }

                if (!correct) {
                    await request.flash("warning", "Invalid password!")
                    response.redirect("/login");
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
        }
    })
}

exports.logOut = (request, response) => {
    response.clearCookie("authcookie");
    response.redirect("/login");
}