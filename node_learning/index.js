const logEvents = require('./logEvents')
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//on listens to the events
myEmitter.on('log', (msg) => {
  logEvents(msg);
});
myEmitter.emit('log','log event emmitter');