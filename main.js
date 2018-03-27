const EventEmitter = require('events').EventEmitter
const CustomeError = require('./customError')

const testCustomError = () => {
    const ce = new CustomeError();
    ce.removeListener('patrick', ce.patrick);
    ce.emit('patrick');
    // ce.on('error', function(err){
    //     console.log('in error callback', err);
    // })
    // ce.emit('error', new Error('Throw an error in app.js'));
    // ce.throwErr();
}

module.exports = {
    testCustomError: testCustomError
}