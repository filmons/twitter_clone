const express = require("express");

const isAuth = require('../middlewares/isAuth');

const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
// router.get("/tweet:id", tweetController.getAllTweets);
router.get("/", tweetController.findAllTweets);

//router.get("/username/", tweetController.getAllTweets);

router.get("/tweet/:id", tweetController.getTweetsDetail);


// AUTHENTICATION
router.get("/login", userController.logIn);
router.post("/login", userController.authentificate);

// router.get("/logout", userController.logOut);

module.exports = router;

// SANDRO EXEMPLE ROUTER 

// router.get("/promos/:id", isAuth, promoController.findOne);
// router.post("/promos", promoController.addOne);

// router.get("/signup", userController.signup);
// router.post("/signup", userController.newAccount);
// router.get("/login", userController.login);
// router.post("/login", userController.authenticate);
// router.get("/logout", userController.logout);