const contracts = require('./service');

(async () => {
    var results = await contracts.test(1); //Play around with this parameter
    console.log(results);

    var results2 = await contracts.get();
    console.log(results2);

    var results3 = await contracts.update('KATIE-SCARLET', 2);
    console.log(results3);

    var results4 = await contracts.insert('THOMAS-JAMES', Math.random());
    console.log(results4.split(',')[1] + ' was inserted.');

    var results5 = await contracts.getOne(results4.split(',')[0]);
    console.log(`${results5[0].firstName}  was retrieved with id of ${results5[0].id}.`);

    var results6 = await contracts.delete(results5[0].id);
    console.log(results6);
})();
