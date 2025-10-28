const fs = require('fs');

// Read the CSV file
fs.readFile('pokemon.csv', 'utf8', (err, data) => {
  if (err) {
    console.error('File not found');
    return;
  }

  // Split file into lines
  const lines = data.trim().split('\n');

  // Split header line
  const headers = lines[0].split(',');

  // Create array to hold JSON data
  const jsonData = [];

  // Push the header as the first JSON object
  jsonData.push({
    id: headers[0],
    name: headers[1],
    type1: headers[2],
    type2: headers[3]
  });

  // Loop through each remaining line and convert to JSON
  for (let i = 1; i < lines.length; i++) {
    const [id, name, type1, type2] = lines[i].split(',');
    jsonData.push({
      id,
      name,
      type1,
      type2: type2 || "" // handle empty Type 2 values
    });
  }

  // Print formatted JSON
  console.log(JSON.stringify(jsonData, null, 2));
});
