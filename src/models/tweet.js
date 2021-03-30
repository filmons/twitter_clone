const db = require("../db");

exports.getAllTweets = (callback) => {
    db.query("SELECT * FROM tweet;", (error, result) => {
        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}
exports.createTweet = (tweet, callback) => { // NEED TO IMPLEMENT USER ID > get current logged in user ID
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

exports.deleteTweet = (tweet, callback) => {
    // console.log(`create tweet | tweet contents: `);
    console.log(`tweet contents:` + tweet);
    db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
        // db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}


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