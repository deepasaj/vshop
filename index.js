var express = require('express');
var app = express();
var path = require('path');
var fs=require('fs');

app.set('port', (process.env.PORT || 5000));
process.env.PWD = process.cwd();
console.log(__dirname);
console.log(process.cwd());
// fs.readdir(__dirname, function (err, files) {
//     if (err) {
//         throw err;
//     }
//
//     files.map(function (file) {
//         return path.join(__dirname, file);
//     }).forEach(function (file) {
//         console.log("%s (%s)", file, path.extname(file));
//     });
// });
console.log('*************');
fs.readdir(process.cwd() + '/VR_VIEW', function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(process.cwd(), file);
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});
app.use(express.static( process.cwd()+ '/VR_VIEW'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(req, res){
    res.sendFile(path.join( __dirname, 'VR_VIEW/website/vrview/examples/hotspots', 'index.html' ));
});