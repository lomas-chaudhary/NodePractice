var http=require('http');

var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/python.txt','utf8');

myReadStream.on('data', function(chunk){
    console.log("")
    console.log("")
    console.log("new chunk recieved:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("")
    console.log("")
    console.log(chunk);

})
