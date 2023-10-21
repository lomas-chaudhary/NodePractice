var http=require('http')

var server=http.createServer(function(req,res){
    console.log("request was made: "+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myObj={
        name:'lomas',
        job:'developer',
        age:27
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000,'127.0.0.1');
console.log('server started listening on port 3000...')