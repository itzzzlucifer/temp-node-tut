const { readFileSync, writeFileSync } = require('fs');
console.log('start');
// readFileSync reads the file contents
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

//
writeFileSync(
    //file path
    './content/result-sync.txt', 
    //content to write
    `---Here is the result : \n${first},\n${second}`,
    //options
    //flag: 'a' is for append
    {flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one');

