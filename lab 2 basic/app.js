const fs = require('fs');

fs.readFile('greeting.txt', (err, data) => {

    let objLog;

    if (err) objLog = { message: err.message };
    else objLog = { message: data.toString() };

    let jsonData = JSON.stringify(objLog);
    console.log(jsonData);
});