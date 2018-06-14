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
            console.log(word);
            return word;
        })
        .catch(function (err) {
            console.log(err);
        });

};
