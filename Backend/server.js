const http=require('http');
const app=require('./app.js');
const { log } = require('console');
const port =process.env.PORT || 3000

const server =http.createServer(app);

server.listen(port,function(){
    console.log(`server is runing on ${port}`);
})