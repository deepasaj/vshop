var express = require('express');
var app = express();
var path = require('path');
var fs=require('fs');
var bodyParser = require('body-parser');


var db = require('./queries');


app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();

app.use(express.static( process.cwd()+ '/VR_View'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/cartitems', db.getAllCartitems);
app.get('/api/cartitems/:id', db.getSingleCartitem);
app.post('/api/cartitems', db.createCartitem);
app.delete('/api/cartitems/:id', db.removeCartitem);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
