const express = require("express");




const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");


const router = express.Router();

router.get("/", tweetController.findAllTweets);
router.get("/user", tweetController.getAllTweets);
router.get("/user:id", tweetController.getAllTweets);


module.exports = router;
