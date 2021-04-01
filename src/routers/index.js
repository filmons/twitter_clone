const express = require("express");




const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");


const router = express.Router();

router.get("/", tweetController.findAllTweets);
//router.get("/tweets/", tweetController.getAllTweets);
router.get("/:id", tweetController.getAllTweets);


module.exports = router;
