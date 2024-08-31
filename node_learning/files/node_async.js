const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','first.txt'), 'utf8')
        console.log(data)
        //write
        await fsPromises.writeFile(path.join(__dirname,'files','fswriteAppend.txt'), 'Make coding as Habit')
        console.log('Write complete');
        //append
        await fsPromises.appendFile(path.join(__dirname,'files','fswriteAppend.txt'), ' and \t Have fun with coding')
        console.log('append complete');
        //rename
        await fsPromises.rename(path.join(__dirname,'files','fswriteAppend.txt'), path.join(__dirname,'files','fWrAp.txt'))
        console.log('rename completed');
        //delete
        await fsPromises.unlink(path.join(__dirname,'files','dummy.txt'))
        console.log('delete completed');
        
        
    } catch(err){
        console.error(err);
        
    }
}
fileOps()

// To avoid this callback hell we use above asycn function
/*
fs.writeFile(path.join(__dirname,'files','fswrite.txt'), 'Welcome to coding world' ,
(err) => {
  if (err) throw err;
  console.log("write  complete");
  fs.appendFile(path.join(__dirname,'files','fswrite.txt'), '\n \n upadated file' ,
(err) => {
  if (err) throw err;
  console.log("append complete");
  fs.rename(path.join(__dirname,'files','fswrite.txt'), path.join(__dirname,'files','fswriteAppend.txt') ,
(err) => {
  if (err) throw err;
  console.log("Rename complete");
  
});
  
});
  
});


*/