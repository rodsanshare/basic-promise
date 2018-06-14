const contracts = require('./service');

(async () => {
    var results = await contracts.test(1) //Play around with this parameter
    console.log(results);

    var results2 = await contracts.get() //Play around with this parameter
    console.log(results2);
})();
