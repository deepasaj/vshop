var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();
console.log(__dirname);
console.log(process.cwd());
app.use(express.static( __dirname + '/VR_VIEW'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(req, res){
    res.sendFile(path.join( __dirname, 'VR_VIEW/website/vrview/examples/hotspots', 'index.html' ));
});