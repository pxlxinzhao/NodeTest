
const ex = require('./server/export');
const main = require('./main')
const express = require('express')
const app = express();

// app.get('/', (req, res) => res.send('Hello Wolrd!'))
app.use(express.static('public'))
app.get('/', function(req, res){
    res.render('index');
})

// main.testCustomError();

ex.printCat();
ex.printPatrick();


console.log('done')
app.listen(3000, () => console.log('Starting at port 3000'))