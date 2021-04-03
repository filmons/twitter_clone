const express = require("express");

const isAuth = require('../middlewares/isAuth');

const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
router.get("/", tweetController.findAllTweets);
// router.get("/tweets/:id", isAuth, tweetController.findOneTweet);
router.post("/tweets", isAuth, tweetController.addOneTweet);
router.post("/tweet/:tweetID/delete", isAuth, tweetController.deleteOneTweet); // :x = params (in rul) / val dynamic
router.post("/tweet/:tweetID/edit", isAuth, tweetController.editOneTweet);

router.get("/user/:userID", tweetController.getTweetsFromUser);
router.get("/user/:userID/tweet/:tweetID", tweetController.getSpecificTweetFromUser);

// INSCRIPTION 
// router.get("/signup/:id", userController.signUp); // recupérer la page d'inscriptions
router.post("/signup", userController.newAccount); // recupère   les donées de l'utilisateur puis le redirige vers la page login
router.get("/signup", userController.signUp); // recupérer la page d'inscriptions // render signup page on user action
// AUTHENTICATION
router.get("/login", userController.logIn);
router.post("/login", userController.authentificate);
router.get("/logout", userController.logOut);

module.exports = router;