exports.test = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (x === 1)
                resolve('hey2');
            else
                reject(new Error('Error has occurred.'));
        }, 3000);
    })
        .then(function (word) {
            console.log(word);
            return word;
        })
        .catch(function (err) {
            console.log(err);
        })

}
