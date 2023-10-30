const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message)=>{
    const dateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm:ss' )}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try{
        if (!fs.existsSync('./logs')){
            await fsPromises.mkdir('./logs');
            console.log('done')
        }
        await fsPromises.appendFile('./logs/eventlog.txt', logItem);
    }catch(err){
        console.error(err);
    }
}


module.exports = logEvents;
