var fs=require('fs');

// var readMe=fs.readFileSync('newfile.txt','utf8');
// // console.log(readMe);
// fs.writeFileSync('writeMe.txt',readMe);


//#asynchronour version
fs.readFile('newfile.txt','utf8',function(err,data){
    // console.log(data);
    fs.writeFile('writeNew.txt', data,function(err){
        if(err)
        {
            console.error(err)
        }
    });
});
console.log('hello')
// console.log(readMe);
// fs.writeFileSync('writeMe.txt',readMe);