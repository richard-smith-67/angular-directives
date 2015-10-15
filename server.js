/**
 * Created by richard.smith on 15/10/2015.
 */
var express = require('express');

var app = express();
app.use('/js', express.static('js'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html')
});

app.listen(3000);