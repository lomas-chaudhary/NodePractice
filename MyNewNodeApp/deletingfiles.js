var fs=require('fs');

fs.unlink('writeNew.txt',function(error){
    if(error)
    {
        console.error('erorr deleting file : ',error);
    }
    else
    {
        console.log("file deleted writeNew.txt")
    }
})