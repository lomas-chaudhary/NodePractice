var fs=require('fs');

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff')

// fs.mkdir('stuff',function(){
//     fs.readFile('writeMe.txt','utf-8',function(err,data){
//         if(err)
//         {
//             console.log("error reading file");
//         }
//         else{
//             fs.writeFile('./stuff/writeMe.txt',data,function(error){
//                 if(error)
//                 {
//                     console.log("error writing file")
//                 }
//                 else{
//                     console.log('file writeMe.txt has been read and written in stuff directory');
//                 }
//             })

//         }
//     })
// })


// fs.unlink('./stuff/writeMe.txt',function(err){
//     if(error)
//     {
//         console.error('error deleting file',error)
//     }
//     else{ fs.rmdir('stuff',function(error){
//             if(error)
//             {
//                 console.log("error removing directory : ", error);
//             }
//             else{
//                 console.log("directory removed")
//             }
//         })
//     }
       
// });
fs.rmdir('stuff',function(error){
                if(error)
                {
                    console.log("error removing directory : ", error);
                }
                else{
                    console.log("directory removed")
                }
            })