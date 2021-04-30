const db = require("../db");

exports.getAllTweets = (callback) => {
  db.query(
    `SELECT tweet.*, user.username, user.city FROM tweet JOIN user ON tweet.user_id = user.id;`,

    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};

exports.getAllTweetsFromUser = (userID, callback) => {
  db.query(
    `SELECT tweet.*, user.* FROM tweet JOIN user ON tweet.user_id = user.id WHERE tweet.user_id = ${userID};`,

    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};
exports.getOneTweetFromUser = (userID, tweetID, callback) => {
  db.query(
    `SELECT * FROM tweet WHERE user_id = ${userID} AND id = ${tweetID};`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};

exports.createTweet = (tweet, callback) => {
  db.query(
    `INSERT INTO tweet (text, creation_date, user_id)
                VALUES ("${tweet.message}", NOW(), 1);`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};
exports.deleteTweet = (tweetID, callback) => {
  db.query(`DELETE FROM tweet WHERE id = ${tweetID};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

exports.editTweet = (userID, tweetText, callback) => {
  db.query(
    `UPDATE tweet SET text = "${tweetText}" WHERE id = ${userID};`,
    (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};
