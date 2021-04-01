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
///////////////////////////////////// pour aficher un profile de mes tweeter
  exports.getoneTweets = (id, callback) => {
    db.query(`SELECT * FROM tweet WHERE id =${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      callback(null, result);
    })
  
  }