const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let hostName = os.hostname();
console.log(`all of youre memmory is ${totalMemory}`);
console.log(`youre free memory is ${freeMemory}`);
console.log(`name of youre loptop is ${hostName}`);

/* use file system */
const { copyFile } = require("fs");

copyFile("text.txt", "copyText.txt", function (error) {
  console.log(error);
});

/* use path module */
const path = require("path");
let file = path.parse(__filename);

console.log(file);
