var http=require('http');

var server=http.createServer(function(req,res){
    console.log('request was made : '+ req.url)
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello lomas');
});

server.listen(3000,'127.0.0.1');
console.log('server started listening on port no 3000 ...')