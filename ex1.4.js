var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('ukinode.txt', ' our director is vithushan anna', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
