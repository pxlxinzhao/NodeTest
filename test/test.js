const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const http = require('chai-http');

chai.use(http);
const baseUrl = 'https://cryptic-spire-27300.herokuapp.com'

describe('Array', function() {

    let users = [];

    const asyncFunc = function(){
        return new Promise(resolve=>{
            setImmediate(()=>{
                users.push('asdf');
                resolve();
            });
        })
    }

    describe('chaiTest', function(){
        const j = '{name:patrick}';

        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    
        it('should return length that equals to array length', function() {
            assert.equal([1,2,3].length, 3);
        });

        it('double done', function(done) {
            // Calling `done()` twice is an error
            setImmediate(done);
            // setImmediate(done);
        });

        it('users should have length 1', async function(){
            // users.push('patrick');
            await asyncFunc();
            users.should.have.length(1);
        })

        it('test user get', function(done){
            chai.request(baseUrl)
            .get('/user/list')
            .end((err, res) => {
                res.body.should.have.length(4);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.instanceof(Array);
                done();
            })
        })

    })

});