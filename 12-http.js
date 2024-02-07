const http = require('http');
const port = 5000
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('This is the home page')
        return
    }
    if(req.url==='/about'){
        res.end('this is about page')
        return
    }
    res.end(`<h1>Oops the page was not found<h1>`)
});

server.listen(port, ()=>{
    console.log(`server is running on https://localhost:${port}`)
});