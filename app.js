var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var control = require("./controllers/controller.js");

var routes = require('./routes/index');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',ejs.__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));

routes(app);
login(app);

var server = app.listen(app.get('port'),function(){
    console.log("start in "+app.get('port'));
});

//app.get('/public/js/search', control.operSearch);
//app.get('/public/js/searchs', control.opersSearch);
app.get('/public/js/signup', control.signupFun);


module.exports = app;
