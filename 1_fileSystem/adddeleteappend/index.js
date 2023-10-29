const fs = require('fs');
const fsPromises = require('fs').promises;

// fs.readFile('./starter.txt', /* 'utf8',*/(err, data) => {
//     if (err) throw err;
//     console.log(data);
//     console.log(data.toString());
// })

// fs.writeFile('./write.txt', 'rsfdvkdhfuhi sdfvviub', (err) => {
//     if (err) throw err;
//     console.log('new file genrated');
// })

// fs.appendFile('./write.txt', '\nyghbsdgdmdk raghaabdl', (err) => {
//     if (err) throw err;
//     console.log('appending genrated file ');
// })

// //exit on uncaugt errors
// process.on('uncaughtException', err => {
//     console.error(`there is a error : ${err} `);
//     process.exit(1);
// })






const fileoperations = async () => {
    try{
        const data =await fsPromises.readFile('./starter.txt', 'utf8');
        console.log(data);
        await fsPromises.writeFile('./newwrite.txt', 'rdcgkjhghfcvhjbkhkgh' );
        await fsPromises.appendFile('./newwrite.txt', '\nhi byre jbhduh' );
        await fsPromises.writeFile('./renamewrite.txt', data );
        await fsPromises.rename('./renamewrite.txt', './renamedwrite.txt'  );
        await fsPromises.unlink('./todelete.js');
    }catch (err) {
        console.error(err);
    }
}

fileoperations();