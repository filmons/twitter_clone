const db = require("../db");

  //// pour aficher mes tweetre
exports.findAllTweets = (callback) => {
  db.query("SELECT * FROM tweet;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

  exports.getAllTweets = (id, callback) => {
      db.query(`SELECT * FROM tweet INNER JOIN user ON user.id = user.tweet_id  WHERE tweet.id = ${id};`, (error, result) => {
        if (error) {
          console.log("error: ", error);
          callback(error, null);
          return;
        }
    
        callback(null, result);
      })
    }
    exports.getOne = (id, callback) => {
      //   db.query(`SELECT * FROM promos INNER JOIN students ON promos.id = students.promo_id WHERE promos.id = ${id};`, (error, result) => {
      //     if (error) {
      //       console.log("error: ", error);
      //       callback(error, null);
      //       return;
      //     }
      
         callback(null, result);
      //   })
      }