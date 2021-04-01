const express = require("express");

const isAuth = require('../middlewares/isAuth');

const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

const router = express.Router();

// CREATE, POST, GET ONE OR GET ALL TWEETS
// router.get("/", tweetController.findAllTweets);
// router.get("/tweets/:id", isAuth, tweetController.findOneTweet);
router.post("/tweets", tweetController.addOneTweet);
router.post("/tweets/delete/:id", tweetController.deleteOneTweet); // :x = params (in rul) / val dynamic
router.post("/tweets/edit/:id", tweetController.editOneTweet);
// router.post("/tweets/edit/:id", tweetController.editOneTweet);
// /users/:userId/books/:bookId

// router.post("/tweets/delete/:id", function(request, response) {
// tweetController.deleteTweet
// });

// app.post('/user/all', function(req, res){
//     Controller.Create
//   });


// INSCRIPTION 
// router.get("/signup/:id", userController.signUp); // recupérer la page d'inscriptions
router.get("/signup", userController.signUp); // recupérer la page d'inscriptions // render signup page on user action
router.post("/signup", userController.newAccount); // recupère   les donées de l'utilisateur puis le redirige vers la page login


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