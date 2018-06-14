var mysql = require('mysql');
require('dotenv/config');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.get = function () {
    let promise = new Promise(function (resolve, reject) {
        con.query("SELECT * FROM " + process.env.DATABASE + ".contracts", function (err, result, fields) {
            if (err) throw err;
            resolve(result);
        });
    });

    return promise
        .then(function (contracts) {
            //console.log(data);
            return contracts[0].firstName;
        })
        .catch(function (err) {
            console.log(err);
        });
};

exports.test = function (x) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (x === 1)
                resolve('hey2');
            else
                reject(new Error('Error has occurred.'));
        }, 3000);
    });

    return promise
        .then(function (word) {
            // console.log(word);
            return word;
        })
        .catch(function (err) {
            console.log(err);
        });

};
