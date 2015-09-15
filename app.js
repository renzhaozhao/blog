var express = require('express');
var path = require('path');
var control = require("./controllers/controller.js");
var app = express();

app.use(express.static(path.join(__dirname)));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'),function(){
    console.log("start in "+app.get('port'));
});

//app.get('/public/js/search', control.operSearch);
//app.get('/public/js/searchs', control.opersSearch);
app.get('/public/js/signup', control.signupFun);

module.exports = app;
