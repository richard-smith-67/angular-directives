/**
 * Created by richard.smith on 15/10/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use('/js', express.static('js'));
//app.use('/styles', express.static('styles/bundle'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html')
});

app.listen(3000);