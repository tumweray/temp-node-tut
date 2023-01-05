//synchronous approach
// writeFileSync creates a new file and add the content to the new file 
// flag appends the new file 


const { readFileSync, writeFileSync } = require("fs");
console.log('start');

const first = readFileSync("first.txt", "utf8");
const second = readFileSync("second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "result-sync.txt",
  `here is the result: ${first},${second}`,
  { flag: "a" }
); 
console.log('done with this task');
console.log('starting the next one ');
