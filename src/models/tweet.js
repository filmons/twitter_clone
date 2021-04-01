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

exports.deleteTweet = (id, callback) => { // params = tweet = obj.id callback is a func
    // callback = function

    // console.log(`create tweet | tweet contents: `);
    console.log(`id (tweet?) contents: ` + id);
    db.query(`DELETE FROM tweet WHERE id = ${id};`, (error, result) => {
        // db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}


exports.editTweet = (tweet, callback) => { // params = tweet = obj.id callback is a func
    // callback = function

    // console.log(`create tweet | tweet contents: `);
    console.log(`++/tweet.js/ editTweet / tweet contents: ` + tweet);


    db.query(`UPDATE tweet SET text = ${tweet} WHERE id = ${tweet};`, (error, result) => {
        // db.query(`DELETE FROM tweet WHERE id = ${tweet.id};`, (error, result) => {
        if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
        }
        callback(null, result);
    })
}



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