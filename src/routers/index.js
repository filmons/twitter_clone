const express = require("express");




const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");


const router = express.Router();

router.get("/", tweetController.findAllTweets);

//router.get("/username/", tweetController.getAllTweets);

router.get("/tweet/:id", tweetController.getTweetsDetail);



module.exports = router;
