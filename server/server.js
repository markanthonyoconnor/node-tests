const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) =>{
    res.send([{
        name: 'Mark',
        age: 37,
    }, {
        name: 'James',
        age: 2,
        
    }, {
        name: 'Ben', 
        age: 15
    }]);
});

app.listen(3000);

module.exports.app = app;