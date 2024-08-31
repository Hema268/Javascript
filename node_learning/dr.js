const fs = require('fs')

//Creating a new directory

if(!fs.existsSync('./new')){ //this logic checks whether this file is there are not
    fs.mkdir('./new', (err) => {
        if(err) throw err
        console.log('Directory creaated');
        
    })
}

//Removing the directory
if(fs.existsSync('./new')){ //this logic checks whether this file is there are not
    fs.rmdir('./new', (err) => {
        if(err) throw err
        console.log('Directory Remmoved');
        
    })
}

process.on('uncaughtException', (err) => {
    console.error(`There was an error ${err}`);
    process.exit(1);
    
})