const db = require("../db");

  //// pour aficher mes tweetre ok
exports.findAllTweets = (callback) => {
  db.query("SELECT * FROM tweet LEFT JOIN user ON user.id = tweet.user_id;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

///////////////////////////////////// ok ok ok
  exports.getTweetById = (id, callback) => {
      db.query(`SELECT * FROM tweet INNER JOIN user ON user.id = ${id};`, (error, result) => {
        if (error) {
          console.log("error: ", error);
         callback(error, null);
          return;
        }
        callback(null, result);
      })
    }
    // this function for creae a tweet çok ok ok 
    exports.createTweet = (tweet, callback) => { 
      console.log(`create tweet | tweet contents: `);
      console.log(tweet);
      db.query(`INSERT INTO tweet (text, creation_date, user_id)
                  VALUES ("${tweet.message}", NOW(), 1);`, (error, result) => {
          if (error) {
              console.log("error: ", error);
              callback(error, null);
              return;
          }
          callback(null, result);
      })
  }
  
    exports.deleteTweet = (id, callback) => { 
     
      db.query(`DELETE FROM tweet WHERE id = ${id};`, (error, result) => {
          
          if (error) {
              console.log("error: ", error);
              callback(error, null);
              return;
          }
          callback(null, result);
      })
  }

// /////////////////////////////////////

exports.editTweet = (id, text, callback) => { 
    
        db.query(`UPDATE tweet SET text = "${text}" WHERE id = ${id};`, (error, result) => {
            if (error) {
                console.log("error: ", error);
                callback(error, null);
                return;
            }
            callback(null, result);
        })
    }



