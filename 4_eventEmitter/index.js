const logEvents = require ('./logEvents');

const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register a listener for a custom event
myEmitter.on('log', (msg)=>logEvents(msg));

//Emit event
myEmitter.emit('log', 'log event emitted');

