const fs = require('fs') //file system

fs.readFile('aqv.txt', 'utf-8', (err, data) =>{

    if(err){
        console.log(err);
        return
    }

    console.log(data);

});