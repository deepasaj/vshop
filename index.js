var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();
app.use(express.static( __dirname + '/VR_VIEW'));
app.set('views', path.join(process.env.PWD, 'VR_VIEW'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});