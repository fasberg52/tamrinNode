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

/* https module */
const http = require("http");
const app = http.createServer();
const PORT = 3008;
var rofagha = [
  { id: 0, name: "mohammadreza taherian" },
  { id: 1, name: "asghar taherian" },
  { id: 2, name: "jamshid taherian" },
];
app.on("request", (req, res) => {
  const takRafigh = req.url.split("/");
  if (takRafigh[1] === "rofagha" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application / json");

    if (takRafigh.length == 3) {
      const takRafighIndex = Number(takRafigh[2]);
      res.end(JSON.stringify(rofagha[takRafighIndex]));
    } else {
      res.end(JSON.stringify(rofagha));
    }
  }
});
app.listen(PORT, () => {
  console.log(`app runing on ${PORT}`);
});
