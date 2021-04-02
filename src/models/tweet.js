const db = require("../db");

  //// pour aficher mes tweetre
exports.findAllTweets = (callback) => {
  db.query("SELECT * FROM tweet INNER JOIN user ON user.id = user.user_id  WHERE tweet.id;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

/////////////////////////////////////
  exports.getTweetById = (id, callback) => {
      db.query(`SELECT * FROM tweet INNER JOIN user ON user.id = user.user_id  WHERE tweet.id = ${id};`, (error, result) => {
        if (error) {
          console.log("error: ", error);
         callback(error, null);
          return;
        }
    
        callback(null, result);
      })
    }
    