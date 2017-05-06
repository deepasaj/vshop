var express = require('express');
var app = express();
var path = require('path');
var fs=require('fs');

app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();

app.use(express.static( process.cwd()+ '/VR_View'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});