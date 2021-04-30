const express = require("express");

const isAuth = require('../middlewares/isAuth');

const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
router.get("/", tweetController.findAllTweets);
router.post("/tweets", isAuth, tweetController.addOneTweet);
router.post("/tweet/:tweetID/delete", isAuth, tweetController.deleteOneTweet); // :x = params (in rul) / val dynamic
router.post("/tweet/:tweetID/edit", isAuth, tweetController.editOneTweet);

router.get("/user/:userID", tweetController.getTweetsFromUser);
router.get("/user/:userID/tweet/:tweetID", tweetController.getSpecificTweetFromUser);

// INSCRIPTION 
router.post("/signup", userController.newAccount); 
router.get("/signup", userController.signUp); 
// AUTHENTICATION
router.get("/login", userController.logIn);
router.post("/login", userController.authentificate);
router.get("/logout", userController.logOut);

module.exports = router;