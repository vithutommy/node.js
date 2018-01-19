var fs = require('fs');

//Rename the file 
fs.rename('ukinode.txt', 'ukinodejsexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

