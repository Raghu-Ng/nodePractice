const fs = require('fs');

const rs = fs.createReadStream('./textfile.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./newtextfile.txt');

// rs.on( 'data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);