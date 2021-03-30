const express = require("express");

const isAuth = require('../middlewares/isAuth');

const userController = require("../controllers/userController");

const router = express.Router();

// create, post, get one or get all Tweets
router.get("/", tweetController.findAllTweets);
router.get("/tweets/:id", isAuth, tweetController.findOneTweet);
router.post("/tweets", tweetController.addOneTweet);

// inscription 
router.get("/signup", userController.signUp); 
router.post("/signup", userController.newAccount);

// l'authentification 
router.get("/login", userController.logIn); 
router.post("/login", userController.authentificate);
router.get("/logout", userController.logOut);

module.exports = router;
