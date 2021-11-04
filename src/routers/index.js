const express = require("express");




const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
router.get("/", tweetController.findAllTweets);
router.get("/tweet/:id", tweetController.getTweetsDetail);

router.post("/tweet", tweetController.addOneTweet);// add un tweet
router.post("/tweets/edit/:id", tweetController.editOneTweet);/// edit un tweet
router.post("/tweets/delete/:id", tweetController.deleteOneTweet); 

// INSCRIPTION 
router.get("/signup/:id", userController.signUp); // recupérer la page d'inscriptions
router.post("/signup", userController.newAccount); // recupère   les donées de l'utilisateur puis le redirige vers la page login
router.get("/signup", userController.signUp); // recupérer la page d'inscriptions // render signup page on user action



// AUTHENTICATION
router.get("/login", userController.logIn);
router.post("/login", userController.authentificate);
router.get("/logout", userController.logOut);

module.exports = router;

