const express = require("express");




const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
// router.get("/tweet:id", tweetController.getAllTweets);
router.get("/", tweetController.findAllTweets);



router.get("/tweet/:id", tweetController.getTweetsDetail);


// AUTHENTICATION
router.get("/login", userController.logIn);
router.post("/login", userController.authentificate);

// router.get("/logout", userController.logOut);

module.exports = router;

