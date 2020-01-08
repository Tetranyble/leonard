var express     = require("express"),
    
    app         = express(),
    bodyParser  = require("body-parser");
var path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/assets', express.static('assets'))
app.use('/images', express.static('images'))
//app.use(express.static(__dirname + "assets/js"));
//app.use(express.static(__dirname + "assets/css"));
//app.use(express.static(__dirname + "images"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.CLIENT_PORT || 3000, function(){
   console.log(`Leonard Ekenekiso Portfolio Application `);
});

