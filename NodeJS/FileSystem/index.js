

import fs from 'fs';

// CRUD -- Create, Read, Update, Delete


// console.log("Reading file...");

// UTF-8 for decoding text files in Node.js
// let fileContent = fs.readFileSync("./one.txt","UTF-8"); // Don not use synchronous methods as it block our call stack
// console.log("File content:", fileContent);


// fs.readFile("./one.txt", "UTF-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else console.log(data);
// })


// Writing the File

// Synchronous method
// fs.writeFileSync("./one.txt", "This is the content of one.txt file which is written by node"); // dont usesynchronous methods as it block our call stack


fs.writeFile("./two.txt","I am the content of two.js file which is written by node", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully.");
  }
});

