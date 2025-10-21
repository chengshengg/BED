const fs = require('fs');

fs.readFile('./greeting.txt', (err, data) => {
  if (err) console.log(err.message);
  else console.log(data.toString());
});