const action2 = require('./service');

(async () => {
    var x = await action2.test(1) //Play around with this parameter
    console.log(x);
})();
