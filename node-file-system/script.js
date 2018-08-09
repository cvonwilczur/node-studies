const fs = require('fs');
// fs stands for file system, which comes with node
// fs allows us to access our computer's file system
// examples, using readFile and other npm modules to read columns in excel


fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('Error');
  }
  console.log(data.toString());
})
// the fs module has a method called readFile,
// the first parameter is the file, after which the function will throw an error,
// however if successful it will instead log the data. toString converts the data's encoding
// to UTF8


const file = fs.readFileSync('./hello.txt');

console.log(file.toString());
// to clarify, readFile above is asynchronous. readFileSync specifies
// that this is to be a synchronous call


fs.appendFile('./hello.txt', ' This is so cool!', err => {
  if (err) {
    console.log(err);
  }
})
// appendfile appends the second param to the end of the first param


fs.writeFile('bye.txt', 'Sad to see you go', err => {
  if (err) {
    console.log(err);
  }
})
// writefile creates new files, the second param being their content

fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err);
  }
})
// unlink deletes a file
