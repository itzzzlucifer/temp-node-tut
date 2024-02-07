const { log } = require('console');
const { readFile, writeFile } = require('fs');
console.log('start');
//callback hell
readFile('./content/first.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        writeFile(
                './content/result-async.txt',
                `Here is the result: ${first}, ${second}`,
                {flag: 'a'},
                (err, result)=>{
                    if(err){
                        console.log(err);
                        return null;
                    }
                    console.log('done with this task');
                }
        );
    });

});
console.log('starting next task');
