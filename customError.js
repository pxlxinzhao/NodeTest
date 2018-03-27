const EventEmitter = require('events').EventEmitter

module.exports = class CustomError extends EventEmitter{
    constructor(){
        super();
        this.on('error', function(err){
            console.log('this is the default error handler');
        })
        this.on('patrick', this.patrick)
    }

    patrick(){
        console.log('patrick');
    }

    test(){
        console.log('Customer Error Test Method');
    }

    throwErr(){
        this.emit('error', new Error('Throw an error in customError.js'))
    }
}