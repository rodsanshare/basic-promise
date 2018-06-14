# basic-promise
Basic promise example


```
var mysql = require('mysql');
require('dotenv/config');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.test = function (x) {
    let promise = new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM " + process.env.DATABASE + ".Contracts", function (err, result, fields) {
                if (err) throw err;
                resolve(result);
            });
            con.end();
        });
    });

    return promise
        .then(function (contracts) {
            //console.log(data);
            return contracts[0].FirstName;
        })
        .catch(function (err) {
            console.log(err);
        });
};

```