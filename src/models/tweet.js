const db = require("../db");

exports.getAllTweets = (callback) => {
  db.query(
    // "SELECT tweet.*, user.username FROM tweet JOIN user ON tweet.id = user.id;",
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
//     SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;
// }

exports.getAllTweetsFromUser = (userID, callback) => {
  // get connected user ID from ... ?
  // console.log(`+++selectedUser: ` + userID);
  // db.query(`SELECT * FROM tweet WHERE user_id = ${userID};`,
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
  // get x tweet from y user
  // console.log(userID);
  // console.log(tweetID);
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
  // NEED TO IMPLEMENT USER ID > get current logged in user ID
  // console.log(`create tweet | tweet contents: `);
  // console.log(tweet);
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
// implement IF logged in user != tweet owner
exports.deleteTweet = (tweetID, callback) => {
  // params = tweet = obj.id callback is a func
  // callback = function

  // console.log(`create tweet | tweet contents: `);
  // console.log(`id (tweet?) contents: ` + tweetID);
  db.query(`DELETE FROM tweet WHERE id = ${tweetID};`, (error, result) => {
    // db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

exports.editTweet = (userID, tweetText, callback) => {
  // params = tweet = obj.id callback is a func
  // callback = function

  // console.log(`create tweet | tweet contents: `);
  // console.log(`++/tweet.js/editTweet/ (id, name) contents: ${id} | ${name}`);

  db.query(
    `UPDATE tweet SET text = "${tweetText}" WHERE id = ${userID};`,
    (error, result) => {
      // db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    }
  );
};

// SINGLE USER TWEETS SELECT ?
// SELECT tweet.*, user.username FROM tweet JOIN user ON tweet.id = user.id

// declare function, needs x y params > give it x y params

// exports.getOne = (id, callback) => {
//   db.query(`SELECT * FROM promos INNER JOIN students ON promos.id = students.promo_id WHERE promos.id = ${id};`, (error, result) => {
//     if (error) {
//       console.log("error: ", error);
//       callback(error, null);
//       return;
//     }

//     callback(null, result);
//   })
// }
