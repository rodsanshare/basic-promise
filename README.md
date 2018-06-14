# basic-promise
Basic promise example

Cannot enqueue Handshake after invoking quit  [[Go]](https://stackoverflow.com/q/14087924/139698)  

npm i sequelize
npm i mysql2
```

var mysql = require('mysql');
require('dotenv/config');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.get = function (x) {
    let promise = new Promise(function (resolve, reject) {
        con.query("SELECT * FROM " + con.database + ".Contracts", function (err, result, fields) {
            if (err) throw err;
            resolve(result);
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