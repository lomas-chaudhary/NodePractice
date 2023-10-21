var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/python.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeNewPython.txt');
myReadStream.pipe(myWriteStream);