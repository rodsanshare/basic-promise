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

exports.getOne = function (id) {
    return new Promise(function (resolve, reject) {
        con.query("SELECT * FROM " + process.env.DATABASE + ".contracts WHERE id=?", [id], function (err, result, fields) {
            if (err) throw err;
            resolve(result);
        });
    });
};

exports.delete = function (id) {
    return new Promise(function (resolve, reject) {
        con.query("DELETE FROM " + process.env.DATABASE +
            ".contracts WHERE id=?", [id],
            function (err, result) {
                if (err) throw err;
                resolve(result.affectedRows + ' row(s) deleted.');
            });
    });
};

exports.update = function (name, id) {
    return new Promise(function (resolve, reject) {
        con.query("UPDATE " + process.env.DATABASE +
            ".contracts SET firstName=? WHERE id=?", [name, id],
            function (err, result) {
                if (err) throw err;
                resolve(result.affectedRows + ' ' + name);
            });
    });
};

exports.insert = function (firstName, vinId, ) {
    return new Promise(function (resolve, reject) {
        con.query("INSERT INTO " + process.env.DATABASE +
            ".contracts (firstName, vehicleId) VALUES (?,?)", [firstName, vinId],
            function (err, result) {
                if (err) throw err;
                resolve(result.insertId + ',' + result.affectedRows + ' ' + firstName);
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