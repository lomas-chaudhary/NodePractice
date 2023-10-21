var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/python.txt','utf8');

var myWriteStream=fs.createWriteStream(__dirname+'/writePython.txt');

myReadStream.on('data',function(chunk){
    console.log('new Chunk received');
    myWriteStream.write(chunk)
})