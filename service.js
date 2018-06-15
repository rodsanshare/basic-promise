var mysql = require('mysql');
require('dotenv/config');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.get = function () {
    return new Promise(function (resolve, reject) {
        con.query("SELECT * FROM " + process.env.DATABASE + ".contracts", function (err, result, fields) {
            if (err) throw err;
            resolve(result[0].firstName);
        });
    });
};

exports.test = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (x === 1)
                resolve('hey2');
            else
                reject(new Error('Error has occurred.'));
        }, 3000);
    });
};
